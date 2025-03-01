export const mockCreateObjectUrl = () => {
  global.window = Object.create(window)
  Object.defineProperty(window, 'URL', {
    value: {
      createObjectURL: (blob: Blob): string =>
        '7584ef69-b1ca-46aa-95ac-35472a7a6b06',
    },
  })
}

export const mockWorker = () => {
  class Worker {
    url: string
    onmessage: (msg: string) => void
    constructor(url: string) {
      this.url = url
      this.onmessage = () => {}
    }
    postMessage(msg: string) {
      this.onmessage(msg)
    }
  }

  global.window = Object.create(window)
  window.Worker = Worker as any
}

export const mockSetInterval = () => {
  global.window = Object.create(window) as any
  ;(window as any).setInterval = (func: () => void) => {
    func()
  }
}

export const mockFetch = () => {
  global.window = Object.create(window) as any
  ;(window as any).fetch = (url: string) => {
    return new Promise((resolve, reject) => {
      resolve({
        json: () => {
          return Promise.resolve({version: '1.2.0'})
        },
      })
    })
  }
}
