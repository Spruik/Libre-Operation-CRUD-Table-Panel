import * as utils from './utils'
import * as apis from './apis'

const onSubmit = scope => () => {
  // check name here, if match any name that exists, stop.
  // we call it name, but for users, it's the ID
  const nameIndex = scope.operationNames.indexOf(scope.operationForm.operation.name)
  if (nameIndex !== -1) { 
    utils.alert('warning', 'Name exists', 'The name of the operation you are creating exists')
    return
   }

  apis.addOperation(
    scope.operationForm.operation,
    utils.successCallBack('mct-operation-form-cancelBtn', 'Operation has been submitted successfully', scope),
    e => utils.failCallBack('mct-operation-form-cancelBtn', `Error occurred when submitting the operation due to ${e}, please try again`)
  )
}

const preprocess = scope => {
  scope.operationForm = {
    operation: {
      name : '',
      sequence: null
    },
    func: {
      onSubmit: onSubmit(scope)
    },
    submitBtnText: 'Submit',
    formTitle: 'Add Operation'
  }
}

export const showOperationForm = scope => {
  preprocess(scope)
  utils.showLargeModal('operation_form.html', scope)
}