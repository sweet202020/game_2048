import { reactive } from 'vue'
export const store = reactive({
    right: false,
    left: false,
    up: true,
    down: false,
    upAndLeft: false,
    downAndLeft: false,
    upAndRight: false,
    downAndRight: false,
    switchRight() {
        this.left = false
        this.right = true
        if (this.left && this.up) {
            this.upAndLeft = true
            this.downAndLeft = false
            this.downAndRight = false
            this.upAndRight = false
        } else if (this.left && this.down) {
            this.downAndLeft = true
            this.upAndLeft = false
            this.downAndRight = false
            this.upAndRight = false
        } else if (this.right && this.up) {
            this.upAndRight = true
            this.downAndLeft = false
            this.downAndRight = false
            this.upAndLeft = false
        } else if (this.right && this.down) {
            this.downAndRight = true
            this.downAndLeft = false
            this.upAndLeft = false
            this.upAndRight = false
        }

    },
    switchUp() {
        this.up = true
        this.down = false
        if (this.left && this.up) {
            this.upAndLeft = true
            this.downAndLeft = false
            this.downAndRight = false
            this.upAndRight = false
        } else if (this.left && this.down) {
            this.downAndLeft = true
            this.upAndLeft = false
            this.downAndRight = false
            this.upAndRight = false
        } else if (this.right && this.up) {
            this.upAndRight = true
            this.downAndLeft = false
            this.downAndRight = false
            this.upAndLeft = false
        } else if (this.right && this.down) {
            this.downAndRight = true
            this.downAndLeft = false
            this.upAndLeft = false
            this.upAndRight = false
        }

    },
    switchLeft() {
        this.left = true
        this.right = false
        if (this.left && this.up) {
            this.upAndLeft = true
            this.downAndLeft = false
            this.downAndRight = false
            this.upAndRight = false
        } else if (this.left && this.down) {
            this.downAndLeft = true
            this.upAndLeft = false
            this.downAndRight = false
            this.upAndRight = false
        } else if (this.right && this.up) {
            this.upAndRight = true
            this.downAndLeft = false
            this.downAndRight = false
            this.upAndLeft = false
        } else if (this.right && this.down) {
            this.downAndRight = true
            this.downAndLeft = false
            this.upAndLeft = false
            this.upAndRight = false
        }
    },
    switchDown() {
        this.down = true
        this.up = false
        if (this.left && this.up) {
            this.upAndLeft = true
            this.downAndLeft = false
            this.downAndRight = false
            this.upAndRight = false
        } else if (this.left && this.down) {
            this.downAndLeft = true
            this.upAndLeft = false
            this.downAndRight = false
            this.upAndRight = false
        } else if (this.right && this.up) {
            this.upAndRight = true
            this.downAndLeft = false
            this.downAndRight = false
            this.upAndLeft = false
        } else if (this.right && this.down) {
            this.downAndRight = true
            this.downAndLeft = false
            this.upAndLeft = false
            this.upAndRight = false
        }

    },
    switcher() {
        if (this.left && this.up) {
            this.upAndLeft = true
            this.downAndLeft = false
            this.downAndRight = false
            this.upAndRight = false
        } else if (this.left && this.down) {
            this.downAndLeft = true
            this.upAndLeft = false
            this.downAndRight = false
            this.upAndRight = false
        } else if (this.right && this.up) {
            this.upAndRight = true
            this.downAndLeft = false
            this.downAndRight = false
            this.upAndLeft = false
        } else if (this.right && this.down) {
            this.downAndRight = true
            this.downAndLeft = false
            this.upAndLeft = false
            this.upAndRight = false
        }
    }
})