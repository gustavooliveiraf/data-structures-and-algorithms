class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
      const sMap = new Map();
      const tMap = t.split('').reduce(
        (acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1),
        new Map()
      );
      let res = '';
      let charCounter = 0;

      for (let i = 0; i < s.length; i++) {
        if (!tMap.has(s[i])) continue;

        if (!sMap.has(s[i])) {
          sMap.set(s[i], new Array());
        }

        const iArray = sMap.get(s[i]);

        if (iArray.length === tMap.get(s[i])) {
          iArray.shift(); // If it's using heap, there's no need to remove it
          charCounter--;
        }

        iArray.push(i);
        charCounter++;

        if (charCounter === t.length) {
          const sMapValues = [...sMap.values()].flat();
          const indexStart = Math.min(...sMapValues); // heap
          const indexEnd   = Math.max(...sMapValues); // heap

          if (res.length === 0 || (indexEnd - indexStart + 1) < res.length) {
            res = s.substring(indexStart, indexEnd + 1)
          }
        }
      }

      return res;
    }
}

const s = "OUZODYXAZV", t = "XYZ";
console.log(new Solution().minWindow(s, t));
