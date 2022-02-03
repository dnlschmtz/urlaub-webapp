<script>
    import { onMount } from "svelte";

    import MapView from "./components/MapView.svelte";
    import Timeline from "./components/Timeline.svelte";
    import Voting from "./components/Voting.svelte";

    let mapView, timeline, voting, webSocket;

    let groupName = "Lädt...";
    let description = "Lädt...";

    onMount(function() {
        webSocket = new WebSocket("ws://localhost:3000/ws");

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id"); 

        let initial = true;

        webSocket.addEventListener("open", () => {
            webSocket.send("fetch-group " + id);
        });

        webSocket.addEventListener("message", function (event) {
            if (!initial) {
                return;
            }
            initial = false;

            const group = JSON.parse(event.data);

            groupName = group.name;
            description = group.description;

            mapView.create(group.targets);
            voting.create(group.targets);
            timeline.create(group.dates);
        });
    });
</script>

<MapView bind:this={mapView}/>
<Timeline bind:this={timeline}/>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&family=Roboto&display=swap');
    :global(body) {
        margin: 0px;
        font-family: sans-serif;
    }
    header {
        background-color: #1e2427;
        display: inline-flex;
        width: 100%;
        min-height: 500px;
        height: 65vh;
        color: #fff;
    }
    .title {
        font-size: 5rem;
        font-weight: 200;
        margin-bottom: 0px;
        text-transform: uppercase;
        font-family: "Raleway";
    }
    .group-name {
        font-size: 5rem;
        margin-top: 0px;
        margin-bottom: 3rem;
        text-transform: uppercase;
        font-family: "Roboto";
    }
    .small-title {
        font-size: 1.7rem;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-family: "Roboto";
    }
    .content {
        width: 100%;
        max-width: 1200px;
        margin: auto;
    }
    .left {
        width: 50%;
        float: left;
    }
    .right {
        width: 50%;
        float: right;
    }
    .description {
        background-color: #1e2427;
        font-family: "Raleway";
        font-size: 1.3rem;
        font-weight: 800;
        text-align: justify;
        color: #fff;
        padding: 10px;
        width: 100%;
        height: 280px;
    }
    .gray-bg {
        width: 100%;
        padding: 50px 0px;
        background-color: #e5e5e5;
    }
    .map {
        width: 100%;
        height: 420px;
    }
    .timeline {
        margin: 50px 0px;
        min-height: 420px;
        padding: 10px;
        background-color: #e5e5e5;
        width: 100%;
    }
    @media only screen and (max-width: 1220px) {
        :global(body) {
            font-size: 12px;
        }
        .content {
            margin: 0px 20px;
        }
    }
</style>


<header>
    <div class="content">
        <div class="left">
            <h2 class="title">Eure Reise</h2>
            <h2 class="group-name">{groupName}</h2>
        </div>

        <div class="right">
            <textarea class="description">{description}</textarea>
        </div>
    </div>
</header>


<div class="gray-bg">
    <div class="content">
        <div class="map" id="map"></div>

        <h3 class="small-title">Stimme für ein Reiseziel</h3>
        <div class="targets">
            <Voting bind:this={voting}/>
        </div>
    </div>
</div>

<div class="content">
    <div class="timeline" id="timeline"></div>
    <h3 class="small-title">Trage ein, wann du kannst</h3>
</div>
