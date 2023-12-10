<template>
    <div :style="style">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType, StyleValue } from "vue";

export default defineComponent({
    name: "CrSpace",
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

function parseSpaceSize(size: string | [string, string]): string {
    function parseSpaceSizeValue(value: string): string {
        switch (value) {
            case "small":
                return "4px";
            case "middle":
                return "8px";
            case "large":
                return "12px";
        }
        return parsePx(value);
    }
    if (Array.isArray(size)) {
        return size.map((value) => parseSpaceSizeValue(value)).join(" ");
    } else {
        return parseSpaceSizeValue(size);
    }
}

function parsePx(value: string) {
    if (value.endsWith("px")) {
        return value;
    } else {
        return `${value}px`;
    }
}
</script>
