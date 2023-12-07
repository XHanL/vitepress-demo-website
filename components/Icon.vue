<template>
    <div :style="style">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { StyleValue } from "vue";
import { parseIconSize, parsePx, parseDeg } from "./utils";

export default defineComponent({
    name: "Icon",
    props: {
        color: {
            type: String,
            default: ""
        },
        size: {
            type: String,
            default: "middle"
        },
        rotate: {
            type: String,
            default: "0"
        },
        margin: {
            type: String,
            default: "0"
        },
        padding: {
            type: String,
            default: "0"
        },
    },
    computed: {
        style() {
            const len = parseIconSize(this.size);
            return {
                "color": this.color,
                "width": len,
                "height": len,
                "rotate": parseDeg(this.rotate),
                "margin": parsePx(this.margin),
                "padding": parsePx(this.padding),
            } as StyleValue;
        }
    },
});
</script>
