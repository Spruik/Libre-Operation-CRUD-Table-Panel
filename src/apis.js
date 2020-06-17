import * as utils from './utils'

export const addOpation = (operation, success, fail) => {
  const toSend = {
    name: operation.name,
    sequence: operation.sequence
  }

  const url = utils.postgRestHost + 'operation'
  utils.post(url, JSON.stringify(toSend)).then(res => {
    success()
  }).catch(e => {
    fail(e)
  })
}

export const updateOperation = (originalId, operation, success, fail) => {
  const toSend = {
    name: operation.name,
    sequence: operation.sequence
  }

  const url = `${utils.postgRestHost}operation?id=eq.${originalId}`
  utils.update(url, JSON.stringify(toSend)).then(res => {
    success()
  }).catch(e => {
    fail(e)
  })
}

export const removeOperation = (id, success, fail) => {
  const url = `${utils.postgRestHost}operation?id=eq.${id}`
  utils.remove(url).then(res => {
    success()
  }).catch(e => {
    fail(e)
  })
}