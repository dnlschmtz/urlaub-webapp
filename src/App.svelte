<script>
    // import Map from "./components/MapView.svelte";
    // import "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js";
    import { setContext, onMount } from "svelte";

    const markerLoc = [
        [49.4887, 8.4658]
    ];

    const initialView = [49.4887, 8.4658];

    let mapContainer;
    let map = L.map(L.DomUtil.crete("div"), {
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
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
</svelte:head>


<div class="map" id="map" bind:this="{mapContainer}">
    <slot></slot>
</div>
