
export const notifyParentOfSelection = (child, state) => {
    if(!child) return
    const parent = state.getParent(child.id)

    if(!parent) return

    const isEveryChildChecked = parent.children?.every(child => child.checkedStatus == 'true' || child.checkedStatus == true);
    const hasIntermediate = parent.children?.some(child => child.checkedStatus == 'indeterminate');
    const hasAnUncheckedChild = parent.children?.some(child => child.checkedStatus == 'false' || child.checkedStatus == false || !child.checkedStatus);
    const hasACheckedChild = parent.children?.some(child => child.checkedStatus == 'true' || child.checkedStatus == true);

    if (isEveryChildChecked) {
        parent.checkedStatus = true
    }else if (hasIntermediate || (hasAnUncheckedChild && hasACheckedChild)){
        parent.checkedStatus = 'indeterminate'
    }else {
        parent.checkedStatus = 'false'
    }
    state.emitItemCheckedChange(parent)
    notifyParentOfSelection(parent, state)
}
export const cascadeStateToDescendants = (item, state) => {
    item.children?.forEach(child => {
        child.checkedStatus = item.checkedStatus
        state.emitItemCheckedChange(child)
        cascadeStateToDescendants(child, state)
    })
}