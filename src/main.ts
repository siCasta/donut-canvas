import './style.css'
import { Scene } from './Scene'
import { $ } from './utils/funcs'

const width = 80 * 10
const height = 24 * 20

window.addEventListener('DOMContentLoaded', () => {
    const scene = new Scene({
        canvas: $<HTMLCanvasElement>('#screen'),
        width,
        height
    })
})
