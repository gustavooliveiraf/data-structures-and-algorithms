; https://www.hackerrank.com/challenges/ctci-making-anagrams
(defn makeAnagram [a b]
  (let [a-map (frequencies a)
        b-map (frequencies b)]
    (+ (reduce (fn [accu [k v]] (+ accu (Math/abs (- v (b-map k 0)))))
             0
             a-map)
       (reduce (fn [accu [k v]] (+ accu (if (contains? a-map k) 0 v)))
                0
                b-map))))

(makeAnagram "cde" "abc")
