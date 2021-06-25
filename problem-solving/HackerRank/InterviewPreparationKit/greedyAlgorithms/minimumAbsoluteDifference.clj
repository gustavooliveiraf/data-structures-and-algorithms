; https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array
(defn minimumAbsoluteDifference [arr]
  (->> arr
    sort
    (partition 2 1)
    (map #(Math/abs (apply - %)))
    (apply min)))

(minimumAbsoluteDifference [-2 2 4])
