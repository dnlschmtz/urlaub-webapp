<script>
    export function create(dates) {
        let rows = [
            [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
            [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
            [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
        ];
        
        google.charts.load('current', {'packages':['timeline']});
        google.charts.setOnLoadCallback(drawChart);
        
        function drawChart() {
            let container = document.getElementById('timeline');
            let chart = new google.visualization.Timeline(container);
            let dataTable = new google.visualization.DataTable();

            dataTable.addColumn({ type: 'string', id: 'Mitglied' });
            dataTable.addColumn({ type: 'date', id: 'Anfang' });
            dataTable.addColumn({ type: 'date', id: 'Ende' });
            dataTable.addRows(rows);

            let options = {
                timeline: { singleColor: '#ffa947' }
            };

            google.visualization.events.addListener(chart, 'ready', function () {
                let rects = container.getElementsByTagName('rect');
                Array.prototype.forEach.call(rects, function(rect) {
                    if ((rect.getAttribute('x') === '0') && (rect.getAttribute('stroke') === 'none')) {
                        rect.setAttribute('fill', '#eee');
                    }
                });
            });

            chart.draw(dataTable, options);
        }
    }
</script>