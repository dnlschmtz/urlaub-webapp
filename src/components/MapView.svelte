<script>
    const initialView = [49.4887, 8.4658];
    let webSocket, groupId;

    let popupContent;
    let map, curX, curY;

    export function create(webSock, id) {
        groupId = id;
        webSocket = webSock;

        map = L.map("map").setView(initialView, 4);
        L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ", {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            maxZoom: 18
        }).addTo(map);
    }

    export function setTargets(targets) {
        targets.forEach(element => {
            let marker = L.marker([element.x, element.y]).addTo(map);
            marker.bindPopup(element.name + " - " + element.votes + " Stimmen");
        });

        let popup = L.popup();

        function onMapClick(e) {
            let coords = e.latlng.toString().split(",");
            curX = parseFloat(coords[0].replace("LatLng(", ""), 10);
            curY = parseFloat(coords[1].replace(")", ""), 10);
            
            popupContent = L.DomUtil.create("div", "myPopup"); // Haben hier leider keine andere Lösung gefunden
            popupContent.innerHTML = '<input type="text" placeholder="Name" style="display: block;" id="add-name"></input><a id="add-submit" style="display: block; text-align: center;">Hinzufügen</a>';

            popup.setLatLng(e.latlng)
                .setContent(popupContent)
                .openOn(map);

                popupContent.querySelector("#add-submit").onclick = (e) => {
                map.closePopup();
                addTarget();
            };
        }
        
        map.on("click", onMapClick);
    }

    function addTarget() {
        let marker = L.marker([curX, curY]).addTo(map);
        let name = popupContent.querySelector("#add-name").value;

        webSocket.send("update-targets " + groupId + " " + name + " " + curX + " " + curY);
        location.reload();
    }
</script>


<style>
    .map {
        width: 100%;
        height: 420px;
    }
</style>


<div class="map" id="map"></div>