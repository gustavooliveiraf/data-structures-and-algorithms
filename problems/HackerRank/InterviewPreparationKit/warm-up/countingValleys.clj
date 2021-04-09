; https://www.hackerrank.com/challenges/counting-valleys
(def mapLevel {\U 1 \D -1})

(defn checkValley [elem level valleys]
  (if (and (= level -1) (= elem \U))
    (inc valleys)
    valleys))

(defn countingValleys [steps path]
  (loop [index 0
         path (vec path)
         level 0
         valleys 0]
    (let [elem (get path index)]
      (if (= index steps)
        valleys
        (recur (inc index) path (+ level (mapLevel elem)) (checkValley elem level valleys))))))

(countingValleys 8 "UDDDUDUU")
