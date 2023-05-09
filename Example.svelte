<script>
import {useEffect} from "./useEffect";

let count = 0;

function handleAddCount(){
    count  = count + 1;
}

function logUpdate(){
    console.log("count changed to " + count );
}

useEffect(logUpdate, ()=>[count]);
</script>

<button on:click={handleAddCount}>
    Count is {count}. Click to add
</button>