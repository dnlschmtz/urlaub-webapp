<script>
    let votes = [];
    
    export function create(targets) {
        votes = [];

        targets.forEach(element => {
            votes.push({
                name: element.name,
                count: element.votes
            });
        });
    }
</script>


{#each votes as {name, count}, i}
    <p>{name} - {count} Stimmen</p>
    <input type="radio" id="vote"/>
{/each}