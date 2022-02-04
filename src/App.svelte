<script>
    import { onMount } from "svelte";

    import MapView from "./components/MapView.svelte";
    import Timeline from "./components/Timeline.svelte";
    import Voting from "./components/Voting.svelte";

    let mapView, timeline, voting;
    let webSocket;
    let groupId;

    let initial = true;
    let groupName = "Lädt...";
    let description = "Lädt...";

    onMount(function() {
        webSocket = new WebSocket("ws://localhost:3000/ws");

        const urlParams = new URLSearchParams(window.location.search);
        groupId = urlParams.get("id"); 

        mapView.create(webSocket, groupId);

        webSocket.addEventListener("open", () => {
            webSocket.send("fetch-group " + groupId);
        });

        webSocket.addEventListener("message", function (event) {
            if (!initial) {
                return;
            }
            initial = false;

            const group = JSON.parse(event.data);

            groupName = group.name;
            description = group.description;

            mapView.setTargets(group.targets);
            voting.create(group.targets, webSocket, groupId);
            timeline.create(group.dates, webSocket, groupId);
        });
    });

    function updateDescription() {
        webSocket.send("update-description " + groupId + " " + description);
        location.reload();
    }
</script>

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
        font-size: 1.2rem;
        font-weight: 800;
        text-align: justify;
        color: #eee;
        padding: 15px;
        width: 100%;
        height: 260px;
    }
    .description-save {
        float: right;
        color: #ccc;
    }
    .description-save:hover {
        cursor: pointer;
        color: #eee;
    }
    .gray-bg {
        width: 100%;
        padding: 50px 0px;
        background-color: #e5e5e5;
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
            <textarea class="description" bind:value={description}></textarea>
            <p class="description-save" on:click={updateDescription}>Beschreibung speichern</p>
        </div>
    </div>
</header>


<div class="gray-bg">
    <div class="content">
        <MapView bind:this={mapView}/>

        <h3 class="small-title">Stimme für ein Reiseziel</h3>
        <div class="targets">
            <Voting bind:this={voting}/>
        </div>
    </div>
</div>

<div class="content">
    <Timeline bind:this={timeline}/>
</div>
