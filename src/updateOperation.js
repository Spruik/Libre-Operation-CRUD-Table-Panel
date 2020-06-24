import * as utils from './utils'
import * as apis from './apis'

const onSubmit = scope => () => {
  const cur = scope.currentOperation
  const newOperation = scope.operationForm.operation

  if (newOperation.name !== cur.name) {
    const result = scope.operationNames.filter(name => name === newOperation.name && name !== cur.name)
    if (result.length >= 1) {
      utils.alert('warning', 'Name exists', 'The name of the operation you are updating exists')
      return
    }
  }

  apis.updateOperation(
    cur.id,
    newOperation,
    utils.successCallBack('mct-operation-form-cancelBtn', 'Operation has been updated successfully', scope),
    e => utils.failCallBack('mct-operation-form-cancelBtn', `Error occurred when updating the operation due to ${e}, please try again`)()
  )
}

const preprocess = scope => {
  const cur = scope.currentOperation
  scope.operationForm = {
    operation: {
      id: cur.id,
      name: cur.name,
      sequence: cur.sequence
    },
    func: {
      onSubmit: onSubmit(scope)
    },
    submitBtnText: 'Update',
    formTitle: 'Update Operation'
  }
}

export const showOperationForm = scope => {
  preprocess(scope)
  utils.showLargeModal('operation_form.html', scope)
}
