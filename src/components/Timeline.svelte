<script>
    export function create(dates) {
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
</script>