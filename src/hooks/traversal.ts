
export const notifyParentOfSelection = (child, state) => {
    if(!child) return
    const parent = state.getParent(child.id)
    console.log(parent, '234');
}