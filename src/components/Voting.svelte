<script>
    let votes = [];
    let webSocket, groupId;
    let selected;
    
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
        webSocket.send("update-votes " + groupId + " " + selected);
        location.reload();
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
        margin-left: 10px;
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
            <input type="radio" name="selected" bind:group={selected} value={name}/>
        </div>
    {/each}

    <h5 class="submit" on:click={vote}>Abstimmen</h5>
{/if}