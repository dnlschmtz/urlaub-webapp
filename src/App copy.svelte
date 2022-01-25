<script>
    // import Map from "./components/MapView.svelte";
    // import "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js";
    import { setContext, onMount } from "svelte";
    // import L from "leaflet";

    const markerLoc = [
        [49.4887, 8.4658]
    ];

    const initialView = [49.4887, 8.4658];

    console.log(L);

    let mapContainer;
    let map = L.map(L.DomUtil.create("div"), {
        center: initialView,
        zoom: 7,
    });

    setContext("leafletMapInstance", map);
    console.log("map", map);

    L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            maxZoom: 18,
        }).addTo(map);

    onMount(() => {
        mapContainer.appendChild(map.getContainer());
        map.getContainer().style.width = "100%";
        map.getContainer().style.height = "100%";
        map.invalidateSize();
    });
</script>


<style>
    :global(body) {
        margin: 0px;
    }

    .map {
      width: 100%;
      max-width: 980px;
      height: 420px;
      margin: auto;
    }
</style>


<svelte:head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"></script>
</svelte:head>


<div class="map" id="map" bind:this="{mapContainer}">
    <slot></slot>
</div>
