<script>
    let votes = [];
    let webSocket, groupId;
    
    export function create(targets, webSock, id) {
        webSocket = webSock;
        groupId = id;
        votes = [];

        targets.forEach(element => {
            votes.push({
                name: element.name,
                count: element.votes
            });
        });
    }

    function vote() {
        alert("vote");

    }
</script>


<style>
    .vote {
        display: inline-block;
        width: 33%;
        min-width: 200px;
    }
    .vote p {
        float: left;
        margin: 0px;
    }
    .vote input {
        float: right;
    }
    .submit {
        float: right;
    }
    .submit:hover {
        cursor: pointer;
    }
</style>

{#if votes.length != 0}
    {#each votes as {name, count}, i}
        <div class="vote">
            <p>{name} - {count} Stimmen</p>
            <input type="radio" name="vote" id="vote-{name}"/>
        </div>
    {/each}

    <h5 class="submit" on:click={vote}>Abstimmen</h5>
{/if}