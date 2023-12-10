<template>
    <div :style="style">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
            <circle cx="17.5" cy="17.5" opacity=".3" r="2.5" fill="currentColor" />
            <path opacity=".3" d="M5 15.5h4v4H5zm7-9.66L10.07 9h3.86z" fill="currentColor" />
            <path
                d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5zm0 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5zM11 13.5H3v8h8v-8zm-2 6H5v-4h4v4z"
                fill="currentColor" />
        </svg>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, markRaw } from "vue";
import type { StyleValue } from "vue";

export default defineComponent({
    name: "CrIcon",
    data() {
        return {
            icon: null
        };
    },
    props: {
        size: {
            type: String,
            default: "middle"
        },
        color: {
            type: String,
            default: ""
        },
        rotate: {
            type: String,
            default: "0"
        },
    },
    computed: {
        style() {
            const len = parseIconSize(this.size);
            return {
                "height": len,
                "width": len,
                "color": this.color,
                "rotate": parseDeg(this.rotate),
            } as StyleValue;
        }
    },
});

function parseIconSize(value: string): string {
    switch (value) {
        case "small":
            return "30px";
        case "middle":
            return "36px";
        case "large":
            return "42px";
    }
    return parsePx(value);
}

function parsePx(value: string) {
    if (value.endsWith("px")) {
        return value;
    } else {
        return `${value}px`;
    }
}

function parseDeg(value: string) {
    if (value.endsWith("deg")) {
        return value;
    } else {
        return `${value}deg`;
    }
}
</script>
