/* generated by Svelte v3.42.3 */
import {
	SvelteComponent,
	append_hydration,
	append_styles,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert_hydration,
	noop,
	safe_not_equal,
	space,
	text
} from "https://cdn.skypack.dev/svelte@3.44.1/internal";

import { onMount } from 'https://cdn.skypack.dev/svelte@3.44.1/internal';
import "./components/MapView.svelte";

function add_css(target) {
	append_styles(target, "svelte-1ojwxik", "@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&family=Roboto&display=swap');body{margin:0px;font-family:sans-serif}header.svelte-1ojwxik{background-color:#202020;display:inline-flex;margin-bottom:50px;width:100%;min-height:500px;height:65vh;color:#fff}.title.svelte-1ojwxik{font-size:5rem;font-weight:200;margin-bottom:0px;text-transform:uppercase;font-family:\"Raleway\"}.group-name.svelte-1ojwxik{font-size:5rem;margin-top:0px;margin-bottom:3rem;text-transform:uppercase;font-family:\"Roboto\"}.content.svelte-1ojwxik{width:100%;max-width:1200px;margin:auto}.left.svelte-1ojwxik{width:50%;float:left}.right.svelte-1ojwxik{width:50%;float:right}.description.svelte-1ojwxik{background-color:#202020;color:#fff;font-family:\"Roboto\";font-size:1.5rem;text-align:justify;padding:10px;width:100%;height:280px}.map.svelte-1ojwxik{width:100%;height:420px;margin-bottom:50px}@media only screen and (max-width: 1220px){body{font-size:12px}.content.svelte-1ojwxik{margin:0px 20px}}");
}

function create_fragment(ctx) {
	let header;
	let div2;
	let div0;
	let h20;
	let t0;
	let t1;
	let h21;
	let t2;
	let t3;
	let div1;
	let textarea;
	let t4;
	let div4;
	let div3;

	return {
		c() {
			header = element("header");
			div2 = element("div");
			div0 = element("div");
			h20 = element("h2");
			t0 = text("Eure Reise");
			t1 = space();
			h21 = element("h2");
			t2 = text(groupName);
			t3 = space();
			div1 = element("div");
			textarea = element("textarea");
			t4 = space();
			div4 = element("div");
			div3 = element("div");
			this.h();
		},
		l(nodes) {
			header = claim_element(nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			div2 = claim_element(header_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h20 = claim_element(div0_nodes, "H2", { class: true });
			var h20_nodes = children(h20);
			t0 = claim_text(h20_nodes, "Eure Reise");
			h20_nodes.forEach(detach);
			t1 = claim_space(div0_nodes);
			h21 = claim_element(div0_nodes, "H2", { class: true });
			var h21_nodes = children(h21);
			t2 = claim_text(h21_nodes, groupName);
			h21_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t3 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			textarea = claim_element(div1_nodes, "TEXTAREA", { class: true });
			children(textarea).forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			header_nodes.forEach(detach);
			t4 = claim_space(nodes);
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true, id: true });
			children(div3).forEach(detach);
			div4_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h20, "class", "title svelte-1ojwxik");
			attr(h21, "class", "group-name svelte-1ojwxik");
			attr(div0, "class", "left svelte-1ojwxik");
			attr(textarea, "class", "description svelte-1ojwxik");
			textarea.value = description;
			attr(div1, "class", "right svelte-1ojwxik");
			attr(div2, "class", "content svelte-1ojwxik");
			attr(header, "class", "svelte-1ojwxik");
			attr(div3, "class", "map svelte-1ojwxik");
			attr(div3, "id", "map");
			attr(div4, "class", "content svelte-1ojwxik");
		},
		m(target, anchor) {
			insert_hydration(target, header, anchor);
			append_hydration(header, div2);
			append_hydration(div2, div0);
			append_hydration(div0, h20);
			append_hydration(h20, t0);
			append_hydration(div0, t1);
			append_hydration(div0, h21);
			append_hydration(h21, t2);
			append_hydration(div2, t3);
			append_hydration(div2, div1);
			append_hydration(div1, textarea);
			insert_hydration(target, t4, anchor);
			insert_hydration(target, div4, anchor);
			append_hydration(div4, div3);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(header);
			if (detaching) detach(t4);
			if (detaching) detach(div4);
		}
	};
}

let groupName = "Testgruppe";
let description = "Beschreibung der Reise";

function instance($$self) {
	create();
	return [];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
	}
}

export default Component;