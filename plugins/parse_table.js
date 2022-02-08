const visit = require('unist-util-visit')

function transformer (ast) {
    visit(
        ast,
        node => node.type === 'table' && !node?.properties?.inner,
        visitor)

    function visitor (node) {
        const newNode = Object.assign({}, node)
        newNode.properties = {
            inner: true
        }

        Object.assign(node, {
            type: 'element',
            data: { hProperties: { className: ['table-wrapper'] } },
            children: [newNode]
        })
    }
}

function parseTable () {
    return transformer
}

module.exports = parseTable
