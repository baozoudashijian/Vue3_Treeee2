export function useGraph(
    onItemsChecked,
    itemCheckedEventHandler
) {
    const checkedItemsLookUp = {}
    const childParentLookUp = {}

    const getParent = (childId) => childParentLookUp[childId]
    const trackNode = (node, parentNode) => childParentLookUp[node.id] = parentNode
    const emitItemCheckedChange = (node) => {
        itemCheckedEventHandler({
            item: node,
            change: node.checkedStatus
        })
        if(node.checkedStatus == 'true') {
            checkedItemsLookUp[node.id] = node
        }else{
            delete(checkedItemsLookUp[node.id])
        }
        onItemsChecked(Object.values(checkedItemsLookUp))
    }

    return {
        emitItemCheckedChange,
        getParent,
        trackNode
    }
}