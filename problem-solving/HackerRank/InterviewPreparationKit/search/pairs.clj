; https://www.hackerrank.com/challenges/pairs
(defn pairs [k arr]
  (let [set (set arr)]
    (reduce #(if (contains? set (- %2 k)) (inc %) %)
            0
            set)))

(pairs 2 [1 5 3 4 2])
