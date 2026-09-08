class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const paths = path.split("/")
        const output = []

        for(const p of paths) {
            if(p == "") {
                continue;
            }
            if(p.includes('.')) {
                if(p.length == 1) {
                    continue;
                }
                else if(p.length == 2) {
                    output.pop()
                    continue;
                }
            }
            output.push(p)
        }
        
        return "/"+output.join("/")
    }
}
