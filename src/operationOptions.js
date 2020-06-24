import * as utils from './utils'
import * as updateOperation from './updateOperation'
import * as apis from './apis'

const onUpdateClick = scope => () => {
  console.log(scope)
  updateOperation.showOperationForm(scope)
}

const onRemoveClick = scope => () => {
  const cur = scope.currentOperation
  apis.removeOperation(
    cur.id,
    utils.successCallBack('mct-operation-option-form-cancelBtn', 'Operation has been removed successfully', scope),
    e => utils.failCallBack('mct-operation-option-form-cancelBtn', `Error occurred when removing the operation due to ${e}, please try again`)()
  )
}

const preprocess = scope => {
  scope.operationOptionForm = {
    onUpdateClick: onUpdateClick(scope),
    onRemoveClick: onRemoveClick(scope)
  }
}

export const showOptionModal = scope => {
  preprocess(scope)
  utils.showModal('operation_options.html', scope.operationOptionForm)
}
