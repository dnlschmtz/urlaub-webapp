<script>
    let rows = [];
    let webSocket, groupId;

    let name, start, end;

    export function create(dates, webSock, id) {
        webSocket = webSock;
        groupId = id;
        let rows = [];

        dates.forEach(element => {
            rows.push([
                element.name,
                new Date(element.start),
                new Date(element.end)
            ]);
        });
        
        google.charts.load('current', {'packages':['timeline']});
        google.charts.setOnLoadCallback(drawChart);
        
        function drawChart() {
            let container = document.getElementById('timeline');
            let chart = new google.visualization.Timeline(container);
            let dataTable = new google.visualization.DataTable();

            dataTable.addColumn({ type: 'string', id: 'Name' });
            dataTable.addColumn({ type: 'date', id: 'Anfang' });
            dataTable.addColumn({ type: 'date', id: 'Ende' });
            dataTable.addRows(rows);

            let options = {
                timeline: { singleColor: '#ffa947' }
            };

            chart.draw(dataTable, options);
        }
    }

    function addDate() {
        //alert(name+ " " + start+ " " + end);
        webSocket.send("update-dates " + groupId + " " + name + " " + start + " " + end);
        location.reload();
    }
</script>


<style>
    .timeline {
        margin: 50px 0px;
        min-height: 420px;
        padding: 10px;
        background-color: #e5e5e5;
        width: 100%;
    }
    .date-vote {
        width: 100%;
        margin-bottom: 150px;
    }
    .date-vote p, input {
        display: inline-block;
        margin: 0px;
        margin-right: 15px;
    }
    .submit {
        margin: 0px;
        margin-top: 3px;
        float: right;
        font-weight: 700;
    }
    .submit:hover {
        cursor: pointer;
    }
</style>


<div class="timeline" id="timeline">
    {#if rows.length == 0}
        <center>
            <h2 style="margin-top: 190px">Keine Einträge vorhanden :(</h2>
        </center>
    {/if}
</div>
<h3 class="small-title">Trage ein, wann du kannst</h3>

<div class="date-vote">
    <p>Name</p>
    <input type="text" bind:value={name}/>
    <p>Startdatum:</p>
    <input type="date" bind:value={start}/>
    <p>Enddatum:</p>
    <input type="date" bind:value={end}/>
    <p class="submit" on:click={addDate}>Eintragen</p>
</div>