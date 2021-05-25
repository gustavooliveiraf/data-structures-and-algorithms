// https://www.hackerrank.com/challenges/ctci-comparator-sorting
static int comparator(Player a, Player b)  {
  if (a.score != b.score)
    return a.score > b.score ? 1 : -1;
  else
    return a.name.compare(b.name) < 0 ? 1 : -1;
}
