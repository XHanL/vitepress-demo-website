<template>
    <div :style="style">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType, StyleValue } from "vue";
import { parseSpaceSize } from "./utils";

export default defineComponent({
    name: "Space",
    props: {
        wrap: {
            type: Boolean,
            default: true
        },
        vertical: {
            type: Boolean,
            default: false
        },
        size: {
            type: [String, Array] as PropType<"small" | "middle" | "large" | string | [string, string]>,
            default: "small"
        },
        align: {
            type: String as PropType<"start" | "end" | "center" | "baseline" | "stretch">,
            default: "start"
        },
        justify: {
            type: String as PropType<"start" | "end" | "center" | "space-around" | "space-between" | "space-evenly">,
            default: "start"
        },
    },
    computed: {
        style() {
            return {
                "display": "flex",
                "flex-wrap": this.wrap ? "wrap" : "nowrap",
                "flex-direction": this.vertical ? "column" : "row",
                "gap": parseSpaceSize(this.size),
                "align-items": this.align,
                "justify-content": this.justify,
            } as StyleValue
        }
    }
});
</script>
