; https://www.hackerrank.com/challenges/two-strings
(defn twoStrings [s1 s2]
  (let [s2Size (count s2)
        s1Map (frequencies s1)]
    (loop [index 0]
      (if (s1Map (get s2 index))
        "YES"
        (if (= index s2Size)
          "NO"
          (recur (inc index)))))))

(twoStrings "and" "art")
(twoStrings "be" "cat")
