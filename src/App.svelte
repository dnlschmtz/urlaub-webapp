<script>
    import { onMount } from "svelte";
    import MapView from "./components/MapView.svelte"

    let mapView;

    let groupName = "Testgruppe";
    let description = "Beschreibung der Reise";

    onMount(function() {
        mapView.create();
    });
</script>

<MapView bind:this={mapView}/>

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
        font-family: "Roboto";
        font-size: 1.5rem;
        text-align: justify;
        color: #fff;
        padding: 10px;
        width: 100%;
        height: 280px;
    }

    .gray-bg {
        width: 100%;
        padding-top: 50px 0px;
        background-color: #e5e5e5;
    }

    .map {
        width: 100%;
        height: 420px;
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
    </div>
</div>
