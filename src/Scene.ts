interface SceneConfig {
    canvas: HTMLCanvasElement
    width: number
    height: number
}

export class Scene {
    canvas
    ctx
    width
    height

    constructor(config: SceneConfig) {
        this.canvas = config.canvas
        this.width = config.width
        this.height = config.height
        this.ctx = this.canvas.getContext('2d')!

        this.normalize()
    }

    normalize() {
        const pixelRatio = window.devicePixelRatio

        this.canvas.style.width = `${this.width}px`
        this.canvas.style.height = `${this.height}px`
        this.canvas.width = this.width * pixelRatio
        this.canvas.height = this.height * pixelRatio
    }
}
