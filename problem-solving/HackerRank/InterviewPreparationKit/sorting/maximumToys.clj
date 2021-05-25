; https://www.hackerrank.com/challenges/mark-and-toys
(defn maximumToys [prices k]
    (loop [pricesSorted (sort prices)
           sum 0
           toys 0]
      (if (or (empty? pricesSorted) (> (+ sum (first pricesSorted)) k))
        toys
        (recur (drop 1 pricesSorted) (+ sum (first pricesSorted)) (inc toys)))))

(maximumToys [1 2 3 4] 7)
