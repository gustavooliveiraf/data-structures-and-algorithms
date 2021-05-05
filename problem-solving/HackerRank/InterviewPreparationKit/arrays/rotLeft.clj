; https://www.hackerrank.com/challenges/ctci-array-left-rotation
(defn rotLeft [arr numb-left-rot]
  (concat (drop numb-left-rot arr) (take numb-left-rot arr)))

(rotLeft [1 2 3 4 5] 4)
