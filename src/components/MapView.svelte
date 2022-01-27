<script>
    import { onMount } from "svelte";

    function create() {
        const markerLoc = [
            [49.4887, 8.4658]
        ];

        const initialView = [49.4887, 8.4658];

        let map;

        onMount(async () => {
            map = L.map("map").setView(initialView, 7);
            L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ", {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
                maxZoom: 18
                }).addTo(map);
        });
    }

    function action() {
        
    }
</script>