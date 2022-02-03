<script>
    export function create(targets) {
        const initialView = [49.4887, 8.4658];

        let map = L.map("map").setView(initialView, 4);
        L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ", {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            maxZoom: 18
        }).addTo(map);

        targets.forEach(element => {
            var marker = L.marker([element.x, element.y]).addTo(map);
            marker.bindPopup(element.name + " - " + element.votes + " Stimmen");
        });
    }

    function update() {
        
    }
</script>