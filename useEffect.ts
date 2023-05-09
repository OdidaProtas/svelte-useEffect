import { afterUpdate, onDestroy } from 'svelte';

export function useEffect(cb: () => any, deps: () => any) {
	let cleanup: () => void;
	
	function apply() {
		if (cleanup) cleanup();
		cleanup = cb();
	}
	
	if (deps) {
		let values: never[] = [];
		afterUpdate(() => {
			const new_values = deps();
			if (new_values.some((value: any, i: string | number) => value !== values[i])) {
				apply();
				values = new_values;
			}
		});
	} else {
		// no deps = always run
		afterUpdate(apply);
	}
	
	onDestroy(() => {
		if (cleanup) cleanup();
	});
}