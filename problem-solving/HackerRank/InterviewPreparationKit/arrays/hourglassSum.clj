; https://www.hackerrank.com/challenges/2d-array
(defn compute-sum [arr x y]
  (+ (get-in arr [x y]) (get-in arr [x (inc y)]) (get-in arr [x (+ y 2)])
     (get-in arr [(inc x) (inc y)])
     (get-in arr [(+ x 2) y]) (get-in arr [(+ x 2) (inc y)]) (get-in arr [(+ x 2) (+ y 2)])))

(defn compute-y-sum [arr x highest-sum]
  (loop [y 0
         highest-y-sum highest-sum]
    (if (= y 4)
      highest-y-sum
      (let [parcial-sum (compute-sum arr x y)
            candidate-sum (if (> parcial-sum highest-y-sum) parcial-sum highest-y-sum)]
        (recur (inc y) candidate-sum)))))

(defn hourglassSum [arr]
  (loop [x 0
         highest-sum (- Integer/MAX_VALUE)]
    (if (= x 4)
      highest-sum
      (let [parcial-sum (compute-y-sum arr x highest-sum)
            candidate-sum (if (> parcial-sum highest-sum) parcial-sum highest-sum)]
        (recur (inc x) candidate-sum)))))

(def arr
  [[1 1 1 0 0 0]
  [0 1 0 0 0 0]
  [1 1 1 0 0 0]
  [0 0 2 4 4 0]
  [0 0 0 2 0 0]
  [0 0 1 2 4 0]])

(hourglassSum arr)
