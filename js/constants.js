const constants = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dateRegex: /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d+ \d+:\d+ [AP]M/g,
    testYear: "1984",
    testNames: "PandaFrame",
    testInput: `
3 | 2
Atomic
Feb 19 7:07 AM
 • 5'
 • 32
p
 • 1-0
PandaFrame
(1879)
+12.9
Mstake5
(2219)
-26.8

3 | 2
Atomic
Feb 19 7:03 AM
 • 3'
 • 39
p
 • 1-0
PandaFrame
(1870)
+9.8
ewfleisc
(1987)
-12.4

3 | 2
Atomic
Feb 19 7:02 AM
 • 1'
 • 13
p
 • 1-0
PandaFrame
(1860)
+9.9
Metis_mi
(1982)
-13.1

3 | 2
Atomic
Feb 19 6:57 AM
 • 5'
 • 52
p
 • 0-1
MelvinPalco
(1781)
+10.2
PandaFrame
(1869)
-9.3

3 | 2
Atomic
Feb 19 6:53 AM
 • 4'
 • 29
p
 • 1-0
PandaFrame
(1863)
+5.9
MelvinPalco
(1788)
-6.5

3 | 2
Atomic
Feb 19 6:50 AM
 • 4'
 • 27
p
 • 1-0
MelvinPalco
(1777)
+10.5
PandaFrame
(1873)
-9.5

3 | 2
Atomic
Feb 19 6:47 AM
 • 3'
 • 24
p
 • 0-1
MelvinPalco
(1766)
+11.1
PandaFrame
(1882)
-10

3 | 2
Atomic
Feb 19 6:42 AM
 • 6'
 • 33
p
 • 0-1
MariusCerlat
(1938)
+7.9
PandaFrame
(1889)
-6.5

3 | 2
Atomic
Feb 19 6:40 AM
 • 2'
 • 19
p
 • 1-0
PandaFrame
(1885)
+3.9
JustOneDeveloper
(1697)
-4

3 | 2
Atomic
Feb 19 6:36 AM
 • 3'
 • 18
p
 • 0-1
PandaFrame
(1882)
+2.8
LukoRaptor
(1615)
-3

3 | 2
Atomic
Feb 19 6:35 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1878)
+4.3
Jipster04
(1714)
-4.6

3 | 2
Atomic
Feb 19 6:32 AM
 • 4'
 • 26
p
 • 1-0
Aoyanco2
(1976)
+5.6
PandaFrame
(1884)
-5.7

3 | 2
Atomic
Jan 4 12:26 PM
 • 7'
 • 37
p
 • 0-1
G0LDMEN
(1877)
+8.8
PandaFrame
(1892)
-7.9

3 | 2
Atomic
Jan 4 12:22 PM
 • 5'
 • 35
p
 • 1-0
G0LDMEN
(1867)
+9.4
PandaFrame
(1900)
-8.4

3 | 2
Atomic
Jan 4 12:20 PM
 • 2'
 • 10
p
 • 1-0
PandaFrame
(1893)
+7.3
G0LDMEN
(1875)
-8.3

3 | 2
Atomic
Jan 4 12:19 PM
 • 1'
 • 11
p
 • 1-0
cp99
(1683)
+11.7
PandaFrame
(1905)
-12.1

3 | 2
Atomic
Jan 4 12:16 PM
 • 2'
 • 13
p
 • 1-0
kylecorrell
(1889)
+9.5
PandaFrame
(1913)
-8.2

3 | 2
Atomic
Jan 4 12:11 PM
 • 5'
 • 27
p
 • 0-1
PandaFrame
(1911)
+1.5
Augustinius9
(1500)
-4.7

3 | 2
Atomic
Jan 4 1:23 AM
 • 5'
 • 34
p
 • 0-1
PandaFrame
(1908)
+3.2
IHateScotch
(1675)
-3.3

3 | 2
Atomic
Jan 4 1:17 AM
 • 6'
 • 37
p
 • 1-0
PandaFrame
(1905)
+3.3
IHateScotch
(1678)
-3.4

3 | 2
Atomic
Jan 4 1:14 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1904)
+1.3
tecnoblade45
(1480)
-3

3 | 2
Atomic
Dec 10 5:26 AM
 • 5'
 • 25
p
 • 0-1
PandaFrame
(1892)
+11.9
dimondimka
(2141)
-20.3

3 | 2
Atomic
Dec 10 5:25 AM
 • 1'
 • 10
p
 • 1-0
PandaFrame
(1888)
+3.8
saikirankskskak
(1697)
-4.3

3 | 2
Atomic
Dec 10 5:23 AM
 • 2'
 • 14
p
 • 1-0
PandaFrame
(1883)
+4.7
Dorzito
(1748)
-5.1

3 | 2
Atomic
Nov 20 9:58 AM
 • 2'
 • 22
p
 • 1-0
PandaFrame
(1876)
+7.3
yourdada53
(1870)
-8.5

3 | 2
Atomic
Nov 20 9:53 AM
 • 6'
 • 40
p
 • 1-0
PandaFrame
(1868)
+7.7
yourdada53
(1879)
-9

3 | 2
Atomic
Nov 20 9:50 AM
 • 3'
 • 14
p
 • 1-0
yourdada53
(1870)
+9
PandaFrame
(1876)
-7.6

3 | 2
Atomic
Nov 20 9:49 AM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1868)
+7.8
yourdada53
(1879)
-9.3

3 | 2
Atomic
Nov 20 9:44 AM
 • 6'
 • 58
p
 • 1-0
yourdada53
(1870)
+9.3
PandaFrame
(1876)
-7.7

3 | 2
Atomic
Nov 13 11:27 AM
 • 8'
 • 81
p
 • 0-1
PandaFrame
(1870)
+6.3
Balca
(1806)
-7.4

3 | 2
Atomic
Nov 13 11:20 AM
 • 7'
 • 100
p
 • 0-1
PandaFrame
(1864)
+5.8
Joxxy4
(1775)
-6

3 | 2
Atomic
Nov 13 10:56 AM
 • 7'
 • 60
p
 • 0-1
PandaFrame
(1859)
+4.9
TotallyJuvenal
(1722)
-5.1

3 | 2
Atomic
Nov 12 12:26 PM
 • 5'
 • 33
p
 • 1-0
asaxena21111111
(1582)
+13
PandaFrame
(1872)
-13

3 | 2
Atomic
Nov 12 12:24 PM
 • 2'
 • 25
p
 • 0-1
kapusta9
(2220)
+3.7
PandaFrame
(1874)
-1.9

3 | 2
Atomic
Nov 12 12:22 PM
 • 2'
 • 28
p
 • 1-0
kapusta9
(2216)
+3.9
PandaFrame
(1876)
-2

3 | 2
Atomic
Nov 12 12:18 PM
 • 4'
 • 26
p
 • 0-1
Scarytheory
(2020)
+6.5
PandaFrame
(1880)
-4.7

3 | 2
Atomic
Nov 12 12:15 PM
 • 4'
 • 27
p
 • 1-0
TotallyJuvenal
(1675)
+12.3
PandaFrame
(1892)
-11.6

3 | 2
Atomic
Nov 12 11:56 AM
 • 2'
 • 29
p
 • 0-1
Hynomaru
(1609)
+13.1
PandaFrame
(1905)
-12.6

3 | 2
Atomic
Nov 12 11:51 AM
 • 5'
 • 37
p
 • 0-1
dsoarhsh
(2002)
+6.7
PandaFrame
(1910)
-5.5

3 | 2
Atomic
Nov 12 11:47 AM
 • 4'
 • 26
p
 • 0-1
PandaFrame
(1903)
+6.9
DrSUPERAWESOME
(1879)
-7.1

3 | 2
Atomic
Nov 12 11:46 AM
 • 2'
 • 14
p
 • 0-1
DrSUPERAWESOME
(1870)
+8.5
PandaFrame
(1912)
-8.3

3 | 2
Atomic
Nov 12 11:44 AM
 • 2'
 • 16
p
 • 1-0
DrSUPERAWESOME
(1861)
+9
PandaFrame
(1920)
-8.7

3 | 2
Atomic
Nov 12 11:42 AM
 • 2'
 • 18
p
 • 1-0
Justin_beer
(1880)
+9
PandaFrame
(1929)
-8.6

3 | 2
Atomic
Nov 12 6:29 AM
 • 8'
 • 95
p
 • 1-0
Aca792
(1968)
+8.6
PandaFrame
(1936)
-6.9

3 | 2
Atomic
Nov 12 6:23 AM
 • 6'
 • 37
p
 • 0-1
GM_Cornucopia
(2085)
+5.9
PandaFrame
(1940)
-4.7

3 | 2
Atomic
Nov 12 6:21 AM
 • 3'
 • 14
p
 • 1-0
GM_Cornucopia
(2078)
+6.2
PandaFrame
(1945)
-4.9

3 | 2
Atomic
Nov 12 6:14 AM
 • 6'
 • 40
p
 • 0-1
PandaFrame
(1942)
+3.2
cacustas
(1709)
-3.4

3 | 2
Atomic
Nov 12 6:11 AM
 • 4'
 • 23
p
 • 1-0
PandaFrame
(1939)
+3.3
cacustas
(1712)
-3.4

3 | 2
Atomic
Nov 12 4:02 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1933)
+5.7
itmeyessssss
(1845)
-6.7

3 | 2
Atomic
Nov 12 3:59 AM
 • 3'
 • 25
p
 • 0-1
PandaFrame
(1927)
+6
itmeyessssss
(1852)
-7.1

3 | 2
Atomic
Nov 12 3:54 AM
 • 5'
 • 61
p
 • 1-0
PandaFrame
(1921)
+6.3
itmeyessssss
(1859)
-7.5

3 | 2
Atomic
Nov 12 3:51 AM
 • 4'
 • 17
p
 • 1-0
itmeyessssss
(1848)
+11.3
PandaFrame
(1930)
-9.4

3 | 2
Atomic
Nov 12 3:47 AM
 • 5'
 • 46
p
 • 1-0
PandaFrame
(1924)
+6.2
itmeyessssss
(1855)
-7.6

3 | 2
Atomic
Nov 12 3:45 AM
 • 2'
 • 18
p
 • 1-0
PandaFrame
(1921)
+2.7
arnau_17
(1646)
-2.8

3 | 2
Atomic
Nov 12 3:23 AM
 • 6'
 • 61
p
 • 0-1
TheStockfishfeeder
(2100)
+6.1
PandaFrame
(1925)
-4.2

3 | 2
Atomic
Nov 12 3:22 AM
 • 2'
 • 18
p
 • 0-1
PandaFrame
(1922)
+2.9
arnau_17
(1659)
-3

3 | 2
Atomic
Nov 12 3:19 AM
 • 3'
 • 30
p
 • 0-1
PandaFrame
(1920)
+2.9
arnau_17
(1662)
-3.1

3 | 2
Atomic
Nov 12 3:16 AM
 • 3'
 • 45
p
 • 1-0
PandaFrame
(1917)
+3
arnau_17
(1665)
-3.2

3 | 2
Atomic
Nov 12 3:14 AM
 • 3'
 • 34
p
 • 0-1
PandaFrame
(1913)
+3
arnau_17
(1669)
-3.3

3 | 2
Atomic
Nov 11 10:21 AM
 • 3'
 • 19
p
 • 1-0
Flexr0
(2047)
+6.7
PandaFrame
(1918)
-4.9

3 | 2
Atomic
Nov 11 10:20 AM
 • 1'
 • 12
p
 • 1-0
Mstake5
(2091)
+6.9
PandaFrame
(1923)
-4.2

3 | 2
Atomic
Nov 11 10:18 AM
 • 3'
 • 25
p
 • 0-1
PandaFrame
(1918)
+5
O-boy1
(1796)
-5.5

3 | 2
Atomic
Nov 11 10:16 AM
 • 2'
 • 27
p
 • 1-0
PandaFrame
(1912)
+5.3
O-boy1
(1801)
-5.7

3 | 2
Atomic
Nov 11 8:56 AM
 • 8'
 • 74
p
 • ½-½
thistest016
(1991)
-2.2
PandaFrame
(1911)
+1.7

3 | 2
Atomic
Nov 11 8:47 AM
 • 3'
 • 22
p
 • 0-1
PandaFrame
(1907)
+3.5
efuovu
(1695)
-3.6

3 | 2
Atomic
Nov 11 8:46 AM
 • 2'
 • 16
p
 • 0-1
PandaFrame
(1903)
+3.6
efuovu
(1699)
-3.7

3 | 2
Atomic
Nov 11 8:38 AM
 • 8'
 • 50
p
 • 0-1
PandaFrame
(1893)
+10.9
Che55n00b503
(2066)
-13.9

3 | 2
Atomic
Nov 11 6:22 AM
 • 8'
 • 80
p
 • ½-½
PandaFrame
(1890)
+2.3
NicoCactus
(2003)
-3

3 | 2
Atomic
Nov 11 6:16 AM
 • 7'
 • 71
p
 • 1-0
NicoCactus
(1995)
+7.3
PandaFrame
(1896)
-5.5

3 | 2
Atomic
Nov 11 6:13 AM
 • 3'
 • 63
p
 • 1-0
PandaFrame
(1886)
+10.1
NicoCactus
(2009)
-13.8

3 | 2
Atomic
Nov 10 8:37 AM
 • 4'
 • 20
p
 • 0-1
PandaFrame
(1880)
+5.4
lgamar
(1773)
-5.6

3 | 2
Atomic
Nov 10 8:36 AM
 • 1'
 • 10
p
 • 1-0
PandaFrame
(1875)
+5.6
lgamar
(1779)
-5.9

3 | 2
Atomic
Nov 10 8:33 AM
 • 3'
 • 34
p
 • 0-1
PandaFrame
(1869)
+5.9
lgamar
(1785)
-6.2

3 | 2
Atomic
Nov 10 8:32 AM
 • 1'
 • 11
p
 • 1-0
PandaFrame
(1863)
+6.2
lgamar
(1791)
-6.6

3 | 2
Atomic
Nov 9 1:22 AM
 • 7'
 • 75
p
 • 1-0
hyy76u
(1816)
+9.7
PandaFrame
(1871)
-9

3 | 2
Atomic
Nov 8 1:11 PM
 • 7'
 • 51
p
 • 1-0
11chessgod
(1861)
+8.1
PandaFrame
(1880)
-8.3

3 | 2
Atomic
Nov 6 7:06 AM
 • 2'
 • 18
p
 • 0-1
PandaFrame
(1877)
+2.6
flananagan
(1592)
-2.8

3 | 2
Atomic
Nov 6 7:01 AM
 • 6'
 • 30
p
 • 1-0
deniss_dunaveckis
(1648)
+30
PandaFrame
(1889)
-12

3 | 2
Atomic
Nov 6 6:58 AM
 • 2'
 • 17
p
 • 0-1
PandaFrame
(1886)
+3.4
JedBlitz
(1661)
-3.6

3 | 2
Atomic
Nov 6 6:50 AM
 • 8'
 • 67
p
 • 0-1
Mstake5
(2040)
+6.5
PandaFrame
(1890)
-4.7

3 | 2
Atomic
Nov 6 6:49 AM
 • 2'
 • 8
p
 • 1-0
Mstake5
(2033)
+7
PandaFrame
(1895)
-4.9

3 | 2
Atomic
Nov 6 6:47 AM
 • 2'
 • 12
p
 • 0-1
PandaFrame
(1893)
+2
LTG18
(1546)
-3.8

3 | 2
Atomic
Nov 6 6:39 AM
 • 6'
 • 64
p
 • 1-0
Mstake5
(2023)
+7.5
PandaFrame
(1898)
-5.1

3 | 2
Atomic
Nov 6 6:22 AM
 • 5'
 • 26
p
 • 1-0
DrSUPERAWESOME
(1898)
+7.6
PandaFrame
(1906)
-8

3 | 2
Atomic
Nov 6 6:16 AM
 • 6'
 • 46
p
 • 0-1
DrSUPERAWESOME
(1890)
+8
PandaFrame
(1915)
-8.4

3 | 2
Atomic
Nov 6 6:15 AM
 • 2'
 • 13
p
 • 1-0
PandaFrame
(1907)
+7.7
DrSUPERAWESOME
(1897)
-7.3

3 | 2
Atomic
Nov 6 6:11 AM
 • 4'
 • 30
p
 • 1-0
DrSUPERAWESOME
(1889)
+8.1
PandaFrame
(1916)
-8.6

3 | 2
Atomic
Nov 6 6:09 AM
 • 3'
 • 22
p
 • 0-1
PandaFrame
(1912)
+3.6
f3verr99
(1692)
-3.8

3 | 2
Atomic
Nov 6 2:18 AM
 • 6'
 • 59
p
 • 1-0
bimbow
(2009)
+5.6
PandaFrame
(1918)
-6

3 | 2
Atomic
Nov 6 2:16 AM
 • 2'
 • 17
p
 • 0-1
bimbow
(2003)
+5.9
PandaFrame
(1924)
-6.3

3 | 2
Atomic
Nov 6 2:14 AM
 • 2'
 • 20
p
 • 1-0
bimbow
(1997)
+6.2
PandaFrame
(1931)
-6.7

3 | 2
Atomic
Nov 6 2:12 AM
 • 2'
 • 19
p
 • 0-1
bimbow
(1990)
+6.5
PandaFrame
(1938)
-7

3 | 2
Atomic
Nov 6 2:08 AM
 • 5'
 • 31
p
 • 0-1
Mstake5
(2107)
+6.2
PandaFrame
(1943)
-4.7

3 | 2
Atomic
Nov 6 2:02 AM
 • 6'
 • 48
p
 • 1-0
Mstake5
(2101)
+6.6
PandaFrame
(1948)
-4.9

3 | 2
Atomic
Nov 6 2:01 AM
 • 1'
 • 15
p
 • 0-1
Mstake5
(2094)
+7.1
PandaFrame
(1953)
-5.2

3 | 2
Atomic
Nov 6 2:01 AM
 • 1'
 • 12
p
 • 1-0
Mstake5
(2086)
+7.6
PandaFrame
(1958)
-5.5

3 | 2
Atomic
Nov 6 2:00 AM
 • 1'
 • 11
p
 • 1-0
PandaFrame
(1946)
+11.9
Mstake5
(2103)
-16.9

3 | 2
Atomic
Nov 6 1:53 AM
 • 3'
 • 22
p
 • 1-0
VIM_ChipoLa14
(2194)
+3.9
PandaFrame
(1950)
-3.4

3 | 2
Atomic
Nov 5 2:42 PM
 • 1'
 • 14
p
 • 0-1
mwizard777
(2169)
+3.9
PandaFrame
(1954)
-3.9

3 | 2
Atomic
Nov 5 2:39 PM
 • 3'
 • 30
p
 • 0-1
mwizard777
(2165)
+4
PandaFrame
(1958)
-4.1

3 | 2
Atomic
Nov 5 2:38 PM
 • 2'
 • 13
p
 • 1-0
mwizard777
(2160)
+4.2
PandaFrame
(1962)
-4.2

3 | 2
Atomic
Nov 5 2:37 PM
 • 1'
 • 11
p
 • 1-0
PandaFrame
(1949)
+13.5
mwizard777
(2174)
-13.3

3 | 2
Atomic
Nov 5 2:33 PM
 • 4'
 • 36
p
 • 1-0
mwizard777
(2170)
+3.9
PandaFrame
(1953)
-3.9

3 | 2
Atomic
Nov 5 2:32 PM
 • 2'
 • 21
p
 • 1-0
PandaFrame
(1939)
+13.9
mwizard777
(2184)
-13.7

3 | 2
Atomic
Nov 5 2:31 PM
 • 1'
 • 13
p
 • 1-0
mwizard777
(2180)
+3.6
PandaFrame
(1942)
-3.6

3 | 2
Atomic
Nov 5 2:29 PM
 • 2'
 • 18
p
 • 0-1
mwizard777
(2176)
+3.7
PandaFrame
(1946)
-3.7

3 | 2
Atomic
Nov 5 2:26 PM
 • 3'
 • 21
p
 • 1-0
Viton123
(1657)
+13.5
PandaFrame
(1961)
-14.8

3 | 2
Atomic
Nov 5 2:24 PM
 • 1'
 • 9
p
 • 0-1
PandaFrame
(1959)
+2.3
quinoapotion
(1624)
-2

3 | 2
Atomic
Nov 5 2:23 PM
 • 2'
 • 16
p
 • 0-1
PandaFrame
(1957)
+2.1
BrainStruggle
(1600)
-3.7

3 | 2
Atomic
Nov 5 2:19 PM
 • 3'
 • 19
p
 • 0-1
atomizer300
(1686)
+17
PandaFrame
(1971)
-14.2

3 | 2
Atomic
Nov 5 2:18 PM
 • 2'
 • 18
p
 • 0-1
Viton123
(1634)
+14.3
PandaFrame
(1986)
-15

3 | 2
Atomic
Nov 5 12:06 PM
 • 10'
 • 106
p
 • 0-1
PandaFrame
(1983)
+2.4
TurtleRegimentFour
(1664)
-2.3

3 | 2
Atomic
Nov 5 11:58 AM
 • 7'
 • 35
p
 • 0-1
PandaFrame
(1975)
+8.7
Aydrias
(1989)
-12

3 | 2
Atomic
Nov 5 11:55 AM
 • 3'
 • 33
p
 • 1-0
PandaFrame
(1972)
+2.3
Azylteagurk
(1646)
-2.7

3 | 2
Atomic
Nov 5 11:51 AM
 • 4'
 • 32
p
 • 0-1
PandaFrame
(1970)
+2.4
Sachpatzidaros
(1654)
-2.4

3 | 2
Atomic
Nov 5 11:47 AM
 • 4'
 • 33
p
 • 1-0
PandaFrame
(1967)
+2.5
Sachpatzidaros
(1657)
-2.4

3 | 2
Atomic
Nov 5 11:43 AM
 • 4'
 • 20
p
 • 0-1
PandaFrame
(1965)
+2.7
Sachpatzidaros
(1669)
-2.6

3 | 2
Atomic
Nov 5 11:06 AM
 • 3'
 • 24
p
 • 0-1
PandaFrame
(1963)
+1.9
HexaeX
(1604)
-1.8

3 | 2
Atomic
Nov 5 10:55 AM
 • 11'
 • 146
p
 • ½-½
NHtakesKing
(1926)
+1
PandaFrame
(1964)
-0.9

3 | 2
Atomic
Nov 5 10:48 AM
 • 6'
 • 36
p
 • 0-1
PandaFrame
(1961)
+2.1
fikpik
(1620)
-2

3 | 2
Atomic
Nov 5 10:47 AM
 • 2'
 • 21
p
 • 1-0
PandaFrame
(1960)
+1.7
Harit4178
(1572)
-1.6

3 | 2
Atomic
Nov 5 10:45 AM
 • 2'
 • 17
p
 • 1-0
rizianrobinson
(1842)
+11.5
PandaFrame
(1971)
-11

3 | 2
Atomic
Nov 5 10:42 AM
 • 2'
 • 17
p
 • 1-0
PandaFrame
(1966)
+4.9
PONKCLOUDTHEGREAT
(1815)
-5

3 | 2
Atomic
Nov 5 10:42 AM
 • 1'
 • 9
p
 • 1-0
PandaFrame
(1964)
+1.6
Harit4178
(1570)
-1.5

3 | 2
Atomic
Nov 5 10:39 AM
 • 3'
 • 55
p
 • 1-0
PandaFrame
(1959)
+5.6
rizianrobinson
(1845)
-6

3 | 2
Atomic
Nov 5 10:38 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1958)
+1
Laihuuphuoc1104
(1467)
-1.8

3 | 2
Atomic
Nov 5 8:52 AM
 • 5'
 • 32
p
 • 0-1
IPlayInABottle
(2219)
+3.2
PandaFrame
(1961)
-3.1

3 | 2
Atomic
Nov 5 8:50 AM
 • 2'
 • 22
p
 • 1-0
IPlayInABottle
(2216)
+3.3
PandaFrame
(1964)
-3.1

3 | 2
Atomic
Nov 5 8:47 AM
 • 4'
 • 32
p
 • 0-1
PandaFrame
(1959)
+4.4
Chozo_Warrior
(1786)
-4.4

3 | 2
Atomic
Nov 5 8:45 AM
 • 1'
 • 13
p
 • 1-0
PandaFrame
(1951)
+8.4
Merlin839
(1966)
-8.2

3 | 2
Atomic
Nov 5 8:45 AM
 • 1'
 • 13
p
 • 1-0
Merlin839
(1958)
+7.9
PandaFrame
(1959)
-8.1

3 | 2
Atomic
Nov 5 8:44 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1951)
+8.6
Merlin839
(1966)
-8.3

3 | 2
Atomic
Nov 5 8:40 AM
 • 4'
 • 33
p
 • 0-1
PandaFrame
(1944)
+6.7
PotatoAnalyst
(1876)
-6.9

3 | 2
Atomic
Nov 5 8:38 AM
 • 1'
 • 13
p
 • 1-0
PandaFrame
(1934)
+10.3
Aydrias
(2023)
-15.4

3 | 2
Atomic
Nov 5 8:36 AM
 • 2'
 • 22
p
 • 0-1
PandaFrame
(1928)
+5.3
Mumbaicha_Sushrut
(1787)
-5.3

3 | 2
Atomic
Nov 5 8:35 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1927)
+1.7
guduboy
(1527)
-4

3 | 2
Atomic
Nov 5 8:34 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1925)
+1.7
Jason_C178
(1532)
-1.6

3 | 2
Atomic
Nov 5 8:26 AM
 • 7'
 • 60
p
 • 0-1
tommoroGM
(1651)
+12.8
PandaFrame
(1939)
-13.9

3 | 2
Atomic
Nov 5 8:18 AM
 • 8'
 • 68
p
 • 1-0
dimondimka
(2221)
+4
PandaFrame
(1942)
-2.8

3 | 2
Atomic
Nov 5 8:13 AM
 • 5'
 • 31
p
 • 1-0
PandaFrame
(1935)
+6.5
Dcarrier17
(1861)
-7.1

3 | 2
Atomic
Nov 5 8:12 AM
 • 1'
 • 9
p
 • 0-1
PandaFrame
(1933)
+2.2
falke_1997
(1595)
-2.8

3 | 2
Atomic
Nov 5 8:11 AM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1931)
+2.2
falke_1997
(1598)
-2.9

3 | 2
Atomic
Nov 5 8:09 AM
 • 2'
 • 15
p
 • 1-0
falke_1997
(1579)
+19.1
PandaFrame
(1945)
-14.4

3 | 2
Atomic
Nov 5 8:08 AM
 • 2'
 • 19
p
 • 1-0
PandaFrame
(1943)
+1.9
falke_1997
(1582)
-2.5

3 | 2
Atomic
Nov 5 8:06 AM
 • 2'
 • 18
p
 • 0-1
PandaFrame
(1942)
+1.9
falke_1997
(1584)
-2.5

3 | 2
Atomic
Nov 5 8:04 AM
 • 1'
 • 9
p
 • 0-1
PandaFrame
(1940)
+1.6
amundkiste
(1541)
-3.5

3 | 2
Atomic
Nov 5 8:03 AM
 • 1'
 • 10
p
 • 1-0
PandaFrame
(1935)
+5.2
rileyoneal
(1809)
-5.6

3 | 2
Atomic
Nov 5 8:01 AM
 • 3'
 • 22
p
 • 0-1
Mumbaicha_Sushrut
(1825)
+12.2
PandaFrame
(1945)
-10.4

3 | 2
Atomic
Nov 5 7:58 AM
 • 3'
 • 26
p
 • 0-1
PandaFrame
(1940)
+5.5
Mumbaicha_Sushrut
(1831)
-6.6

3 | 2
Atomic
Nov 5 7:56 AM
 • 1'
 • 16
p
 • 1-0
PandaFrame
(1935)
+5
dogterfranki
(1796)
-5.4

3 | 2
Atomic
Nov 5 7:55 AM
 • 2'
 • 17
p
 • 0-1
PandaFrame
(1929)
+5.2
dogterfranki
(1802)
-5.7

3 | 2
Atomic
Nov 5 7:47 AM
 • 8'
 • 121
p
 • ½-½
PandaFrame
(1931)
-1.4
deeplyClosetedChessMan
(1866)
+1.3

3 | 2
Atomic
Nov 5 7:44 AM
 • 4'
 • 21
p
 • 0-1
PandaFrame
(1924)
+6.9
deeplyClosetedChessMan
(1872)
-6.2

3 | 2
Atomic
Nov 5 7:42 AM
 • 2'
 • 12
p
 • 0-1
PandaFrame
(1922)
+1.8
Angquan
(1546)
-3.8

3 | 2
Atomic
Nov 5 7:41 AM
 • 2'
 • 9
p
 • 1-0
deeplyClosetedChessMan
(1860)
+8.6
PandaFrame
(1932)
-9.7

3 | 2
Atomic
Nov 5 7:37 AM
 • 4'
 • 43
p
 • 1-0
playerkhoa
(1578)
+32.4
PandaFrame
(1946)
-14

3 | 2
Atomic
Nov 5 7:35 AM
 • 2'
 • 26
p
 • 0-1
PandaFrame
(1944)
+1.6
Angquan
(1545)
-3.8

3 | 2
Atomic
Nov 5 7:34 AM
 • 1'
 • 6
p
 • 1-0
PandaFrame
(1943)
+1.6
Angquan
(1549)
-4

3 | 2
Atomic
Nov 5 5:49 AM
 • 1'
 • 12
p
 • 0-1
PandaFrame
(1941)
+1.7
Harit4178
(1560)
-3.2

3 | 2
Atomic
Nov 5 5:47 AM
 • 2'
 • 31
p
 • 0-1
PandaFrame
(1939)
+1.8
KV44MM
(1585)
-2.1

3 | 2
Atomic
Nov 5 5:38 AM
 • 9'
 • 127
p
 • 1-0
PandaFrame
(1931)
+8.4
TadeuszStrus
(1968)
-9.7

3 | 2
Atomic
Nov 5 5:35 AM
 • 2'
 • 26
p
 • 1-0
Flexr0
(2060)
+5.8
PandaFrame
(1936)
-5.1

3 | 2
Atomic
Nov 5 5:31 AM
 • 4'
 • 51
p
 • 1-0
Flexr0
(2053)
+6.1
PandaFrame
(1941)
-5.3

3 | 2
Atomic
Nov 5 5:29 AM
 • 3'
 • 27
p
 • 0-1
Flexr0
(2047)
+6.4
PandaFrame
(1947)
-5.6

3 | 2
Atomic
Nov 5 5:28 AM
 • 1'
 • 11
p
 • 1-0
Flexr0
(2040)
+6.8
PandaFrame
(1953)
-5.9

3 | 2
Atomic
Nov 5 5:27 AM
 • 2'
 • 28
p
 • 0-1
PandaFrame
(1950)
+3
DiniSampaio
(1695)
-3.3

3 | 2
Atomic
Nov 5 5:26 AM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1947)
+3.1
DiniSampaio
(1699)
-3.4

3 | 2
Atomic
Nov 5 5:22 AM
 • 4'
 • 36
p
 • 0-1
PandaFrame
(1941)
+5.3
dogterfranki
(1828)
-6.4

3 | 2
Atomic
Nov 5 5:21 AM
 • 1'
 • 15
p
 • 0-1
PandaFrame
(1936)
+5.6
dogterfranki
(1835)
-6.8

3 | 2
Atomic
Nov 5 5:21 AM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1930)
+5.9
dogterfranki
(1842)
-7.3

3 | 2
Atomic
Nov 5 5:20 AM
 • 1'
 • 13
p
 • 1-0
PandaFrame
(1924)
+6.2
M4t_22
(1847)
-6.8

3 | 2
Atomic
Nov 5 5:19 AM
 • 1'
 • 11
p
 • 1-0
Alphresco
(1472)
+44.7
PandaFrame
(1938)
-14

3 | 2
Atomic
Nov 5 3:03 AM
 • 8'
 • 73
p
 • 1-0
PandaFrame
(1928)
+9.6
bimbow
(2013)
-9.5

3 | 2
Atomic
Nov 5 2:55 AM
 • 6'
 • 52
p
 • ½-½
bimbow
(2015)
-1.9
PandaFrame
(1926)
+1.9

3 | 2
Atomic
Nov 5 2:53 AM
 • 2'
 • 19
p
 • 0-1
bimbow
(2009)
+6.1
PandaFrame
(1932)
-6.2

3 | 2
Atomic
Nov 5 2:47 AM
 • 6'
 • 55
p
 • 0-1
PandaFrame
(1922)
+10
bimbow
(2019)
-10

3 | 2
Atomic
Nov 5 2:39 AM
 • 8'
 • 85
p
 • 0-1
bimbow
(2013)
+6.1
PandaFrame
(1928)
-6.1

3 | 2
Atomic
Nov 5 2:38 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1926)
+2
Blank_Ryuzaki
(1578)
-5

3 | 2
Atomic
Nov 5 1:18 AM
 • 2'
 • 18
p
 • 0-1
PandaFrame
(1925)
+1.6
thaihall
(1525)
-4

3 | 2
Atomic
Nov 5 1:12 AM
 • 6'
 • 53
p
 • 0-1
PandaFrame
(1920)
+4.7
pavanreddy97
(1769)
-4.8

3 | 2
Atomic
Nov 5 1:09 AM
 • 3'
 • 28
p
 • 1-0
Chozo_Warrior
(1728)
+12.1
PandaFrame
(1932)
-11.9

3 | 2
Atomic
Nov 5 1:03 AM
 • 6'
 • 35
p
 • 1-0
VIM_ChipoLa14
(2109)
+6.1
PandaFrame
(1936)
-4.3

3 | 2
Atomic
Nov 5 1:00 AM
 • 3'
 • 19
p
 • 1-0
VIM_ChipoLa14
(2102)
+6.6
PandaFrame
(1941)
-4.5

3 | 2
Atomic
Nov 4 2:56 PM
 • 5'
 • 62
p
 • 0-1
PandaFrame
(1936)
+4.7
dmo9315
(1787)
-5

3 | 2
Atomic
Nov 4 2:54 PM
 • 3'
 • 15
p
 • 1-0
PandaFrame
(1930)
+6.2
cigarettespop-pop
(1853)
-6.7

3 | 2
Atomic
Nov 4 2:48 PM
 • 5'
 • 50
p
 • 0-1
PandaFrame
(1928)
+1.6
Crazier_Horse
(1544)
-1.6

3 | 2
Atomic
Nov 4 2:41 PM
 • 7'
 • 43
p
 • 1-0
REDDITGOLD
(1991)
+6.5
PandaFrame
(1935)
-6.6

3 | 2
Atomic
Nov 4 2:33 PM
 • 8'
 • 80
p
 • 1-0
IHaveTheSauce
(2159)
+4.9
PandaFrame
(1938)
-3.5

3 | 2
Atomic
Nov 4 2:29 PM
 • 5'
 • 27
p
 • 0-1
IHaveTheSauce
(2154)
+5.2
PandaFrame
(1942)
-3.7

3 | 2
Atomic
Nov 4 2:26 PM
 • 3'
 • 37
p
 • 1-0
PandaFrame
(1933)
+9
jluisvv
(1985)
-10.5

3 | 2
Atomic
Nov 4 2:19 PM
 • 6'
 • 39
p
 • 0-1
PandaFrame
(1928)
+5.3
superjoe18
(1807)
-5.9

3 | 2
Atomic
Nov 4 2:19 PM
 • 1'
 • 11
p
 • 1-0
roran_2018
(1810)
+11.6
PandaFrame
(1939)
-10.7

3 | 2
Atomic
Nov 4 1:21 PM
 • 5'
 • 32
p
 • 0-1
SforzaPlayer
(1906)
+9.2
PandaFrame
(1948)
-8.9

3 | 2
Atomic
Nov 4 1:18 PM
 • 3'
 • 29
p
 • 0-1
SforzaPlayer
(1896)
+9.8
PandaFrame
(1957)
-9.4

3 | 2
Atomic
Nov 4 1:16 PM
 • 3'
 • 21
p
 • 0-1
PandaFrame
(1950)
+7.1
SforzaPlayer
(1903)
-7.3

3 | 2
Atomic
Nov 4 1:14 PM
 • 2'
 • 16
p
 • 0-1
PandaFrame
(1948)
+1.7
jack111111111111111111112
(1560)
-1.6

3 | 2
Atomic
Nov 4 1:09 PM
 • 5'
 • 47
p
 • 0-1
PandaFrame
(1941)
+7.7
SforzaPlayer
(1923)
-8.2

1 | 5
Atomic
Nov 4 1:05 PM
 • 3'
 • 22
p
 • 0-1
PandaFrame
(1938)
+2.9
articunobot
(1661)
-3.6

3 | 2
Atomic
Nov 4 1:03 PM
 • 3'
 • 23
p
 • 0-1
PandaFrame
(1936)
+1.9
Justin_beer
(1578)
-1.8

3 | 2
Atomic
Nov 4 12:57 PM
 • 4'
 • 38
p
 • 0-1
PandaFrame
(1930)
+5.6
Buckwheatboi
(1817)
-5.8

3 | 2
Atomic
Nov 4 12:52 PM
 • 6'
 • 41
p
 • 1-0
PandaFrame
(1924)
+5.9
Buckwheatboi
(1823)
-6.1

3 | 2
Atomic
Nov 4 12:51 PM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1923)
+1.6
cburger1
(1519)
-4.4

3 | 2
Atomic
Nov 4 12:51 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1921)
+1.6
cburger1
(1524)
-4.6

3 | 2
Atomic
Nov 4 12:50 PM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1919)
+1.5
Mailman5849168
(1512)
-4.1

3 | 2
Atomic
Nov 4 12:48 PM
 • 3'
 • 24
p
 • 1-0
Buckwheatboi
(1808)
+11.2
PandaFrame
(1930)
-10.5

3 | 2
Atomic
Nov 4 12:45 PM
 • 3'
 • 29
p
 • 1-0
dragonfire2
(2220)
+3.2
PandaFrame
(1933)
-2.6

3 | 2
Atomic
Nov 4 12:38 PM
 • 6'
 • 67
p
 • 0-1
PandaFrame
(1927)
+5.8
vtrain1
(1832)
-6.4

3 | 2
Atomic
Nov 4 12:34 PM
 • 5'
 • 41
p
 • 1-0
vtrain1
(1821)
+11.6
PandaFrame
(1937)
-10.4

3 | 2
Atomic
Nov 4 12:32 PM
 • 2'
 • 12
p
 • 1-0
PandaFrame
(1934)
+3.2
xessnub
(1691)
-3.2

3 | 2
Atomic
Nov 4 12:28 PM
 • 4'
 • 44
p
 • 0-1
PandaFrame
(1931)
+2.6
jxk90
(1644)
-2.6

3 | 2
Atomic
Nov 4 12:27 PM
 • 2'
 • 14
p
 • 0-1
PandaFrame
(1928)
+3.3
xessnub
(1693)
-3.3

3 | 2
Atomic
Nov 4 12:25 PM
 • 2'
 • 15
p
 • 1-0
xessnub
(1680)
+12.8
PandaFrame
(1941)
-12.8

3 | 2
Atomic
Nov 4 12:22 PM
 • 4'
 • 35
p
 • 1-0
kurewskiedebiuty
(2389)
+2.5
PandaFrame
(1942)
-1.2

3 | 2
Atomic
Nov 4 9:15 AM
 • 4'
 • 34
p
 • 1-0
PandaFrame
(1932)
+10
Flexr0
(2046)
-12.7

3 | 2
Atomic
Nov 4 9:11 AM
 • 5'
 • 37
p
 • 1-0
Flexr0
(2039)
+7.1
PandaFrame
(1938)
-5.6

3 | 2
Atomic
Nov 4 9:08 AM
 • 4'
 • 20
p
 • 1-0
PandaFrame
(1934)
+3.3
FlawlessGambit
(1705)
-3.4

3 | 2
Atomic
Nov 4 9:01 AM
 • 7'
 • 80
p
 • 0-1
DeepankarSinghBisht
(1789)
+11.7
PandaFrame
(1945)
-10.9

3 | 2
Atomic
Nov 4 8:58 AM
 • 3'
 • 16
p
 • 1-0
PandaFrame
(1942)
+3.2
FlawlessGambit
(1701)
-3.3

3 | 2
Atomic
Nov 4 8:50 AM
 • 7'
 • 55
p
 • 1-0
PandaFrame
(1931)
+11.1
Gerard_Bitterbal
(2108)
-17.4

3 | 2
Atomic
Nov 4 8:47 AM
 • 4'
 • 40
p
 • 1-0
NHtakesKing
(1960)
+9.1
PandaFrame
(1938)
-7.2

3 | 2
Atomic
Nov 4 8:46 AM
 • 1'
 • 12
p
 • 0-1
amckn8
(1585)
+14.8
PandaFrame
(1952)
-13.8

3 | 2
Atomic
Nov 4 8:43 AM
 • 3'
 • 26
p
 • 0-1
PandaFrame
(1950)
+1.8
amckn8
(1587)
-1.9

3 | 2
Atomic
Nov 4 8:41 AM
 • 3'
 • 14
p
 • 1-0
ThunderQuaken421
(1941)
+10.4
PandaFrame
(1958)
-7.9

3 | 2
Atomic
Nov 4 8:38 AM
 • 3'
 • 21
p
 • 0-1
PandaFrame
(1955)
+2.9
WolffA24
(1698)
-3.1

3 | 2
Atomic
Nov 4 8:35 AM
 • 4'
 • 28
p
 • 1-0
PandaFrame
(1951)
+4.2
Filispeed_01
(1783)
-4.8

3 | 2
Atomic
Nov 4 8:31 AM
 • 4'
 • 46
p
 • 1-0
leao23
(2155)
+4.1
PandaFrame
(1955)
-3.7

3 | 2
Atomic
Nov 4 8:29 AM
 • 2'
 • 16
p
 • 0-1
leao23
(2150)
+4.2
PandaFrame
(1958)
-3.8

3 | 2
Atomic
Nov 4 7:40 AM
 • 8'
 • 64
p
 • ½-½
PandaFrame
(1957)
+1.4
Pumikooo
(2025)
-2.1

3 | 2
Atomic
Nov 4 7:33 AM
 • 7'
 • 52
p
 • 0-1
PandaFrame
(1948)
+9.4
Pumikooo
(2040)
-14

3 | 2
Atomic
Nov 4 7:32 AM
 • 2'
 • 10
p
 • 1-0
PandaFrame
(1938)
+9.9
Pumikooo
(2055)
-15.2

3 | 2
Atomic
Nov 4 7:28 AM
 • 4'
 • 46
p
 • 1-0
Pumikooo
(2046)
+8.5
PandaFrame
(1943)
-5.4

3 | 2
Atomic
Nov 4 7:27 AM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1933)
+10.2
Pumikooo
(2063)
-16.5

3 | 2
Atomic
Nov 4 7:25 AM
 • 3'
 • 32
p
 • 1-0
Pumikooo
(2054)
+8.6
PandaFrame
(1938)
-5.2

3 | 2
Atomic
Nov 4 7:22 AM
 • 3'
 • 38
p
 • 1-0
SG749876
(1674)
+13.2
PandaFrame
(1951)
-12.7

3 | 2
Atomic
Nov 4 7:19 AM
 • 3'
 • 20
p
 • 1-0
cvjdbkgxc
(2103)
+5.7
PandaFrame
(1955)
-4.6

3 | 2
Atomic
Nov 4 6:49 AM
 • 2'
 • 13
p
 • 1-0
PandaFrame
(1950)
+5.1
robertoambriz014
(1828)
-6.2

3 | 2
Atomic
Nov 4 6:46 AM
 • 2'
 • 22
p
 • 1-0
PandaFrame
(1946)
+4
Rainy_Fish
(1762)
-4.2

3 | 2
Atomic
Nov 4 6:44 AM
 • 2'
 • 24
p
 • 0-1
PandaFrame
(1942)
+4.1
Rainy_Fish
(1766)
-4.4

3 | 2
Atomic
Nov 4 6:43 AM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1938)
+4.3
Rainy_Fish
(1771)
-4.6

3 | 2
Atomic
Nov 4 6:41 AM
 • 3'
 • 40
p
 • 0-1
PandaFrame
(1934)
+4.4
Rainy_Fish
(1775)
-4.7

3 | 2
Atomic
Nov 4 6:38 AM
 • 3'
 • 35
p
 • 1-0
PandaFrame
(1929)
+4.6
Rainy_Fish
(1780)
-5

3 | 2
Atomic
Nov 4 6:37 AM
 • 2'
 • 28
p
 • 1-0
Rainy_Fish
(1768)
+12
PandaFrame
(1940)
-11.1

3 | 2
Atomic
Nov 4 6:31 AM
 • 6'
 • 78
p
 • 1-0
PandaFrame
(1936)
+4.4
Rainy_Fish
(1773)
-4.7

3 | 2
Atomic
Nov 4 6:29 AM
 • 2'
 • 21
p
 • 0-1
PandaFrame
(1931)
+4.5
Rainy_Fish
(1778)
-4.9

3 | 2
Atomic
Nov 4 6:29 AM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1926)
+4.7
Rainy_Fish
(1783)
-5.2

3 | 2
Atomic
Nov 4 6:27 AM
 • 3'
 • 26
p
 • 1-0
Rainy_Fish
(1771)
+12.1
PandaFrame
(1937)
-11

3 | 2
Atomic
Nov 4 2:23 AM
 • 4'
 • 27
p
 • 1-0
iostratme
(1984)
+8.6
PandaFrame
(1944)
-6.8

3 | 2
Atomic
Nov 4 2:22 AM
 • 2'
 • 18
p
 • 1-0
PandaFrame
(1935)
+9
iostratme
(1996)
-11.5

3 | 2
Atomic
Nov 4 2:21 AM
 • 1'
 • 16
p
 • 1-0
IPlayInABottle
(2204)
+3
PandaFrame
(1938)
-2.8

3 | 2
Atomic
Nov 4 1:39 AM
 • 8'
 • 63
p
 • 0-1
TheStockfishfeeder
(1991)
+9.2
PandaFrame
(1945)
-6.7

3 | 2
Atomic
Nov 3 9:28 AM
 • 4'
 • 33
p
 • 1-0
PandaFrame
(1939)
+6.1
eeeeeeeeeeeeeeeeee475
(1863)
-7.2

3 | 2
Atomic
Nov 3 9:27 AM
 • 1'
 • 13
p
 • 1-0
Ryan_Funk-Clark_NPA
(2003)
+9.7
PandaFrame
(1945)
-6.5

3 | 2
Atomic
Nov 3 9:26 AM
 • 2'
 • 10
p
 • 1-0
PandaFrame
(1936)
+9
BubTheFirst
(1993)
-12

3 | 2
Explosive Fight
Nov 3 9:23 AM
 • 2'
 • 18
p
 • 0-1
PandaFrame
(1932)
+4.4
Ziper305
(1761)
-4.3

3 | 2
Explosive Fight
Nov 3 9:21 AM
 • 2'
 • 22
p
 • 0-1
PandaFrame
(1930)
+1.3
Led-Bill
(1497)
-1.4

3 | 2
Explosive Fight
Nov 3 9:21 AM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1929)
+1.5
gsmea
(1521)
-3.3

3 | 2
Atomic
Nov 3 9:16 AM
 • 5'
 • 33
p
 • 0-1
PandaFrame
(1921)
+7.6
juliendelvingt
(1919)
-9.2

3 | 2
Atomic
Nov 3 9:11 AM
 • 5'
 • 58
p
 • 1-0
cvjdbkgxc
(2031)
+6.6
PandaFrame
(1927)
-5.5

3 | 2
Atomic
Nov 3 9:09 AM
 • 3'
 • 33
p
 • 1-0
PandaFrame
(1925)
+2.1
N3al_Jain
(1599)
-2.3

3 | 2
Atomic
Nov 3 9:04 AM
 • 5'
 • 38
p
 • 1-0
PandaFrame
(1923)
+2.2
N3al_Jain
(1601)
-2.3

3 | 2
Atomic
Nov 3 8:58 AM
 • 7'
 • 71
p
 • ½-½
kingcobrax03
(1903)
+0.5
PandaFrame
(1923)
-0.4

3 | 2
Atomic
Nov 3 7:25 AM
 • 1'
 • 16
p
 • 1-0
bit_kidon
(2006)
+5.8
PandaFrame
(1929)
-6.1

3 | 2
Atomic
Nov 3 7:20 AM
 • 5'
 • 58
p
 • 0-1
bit_kidon
(2000)
+6.1
PandaFrame
(1935)
-6.3

3 | 2
Atomic
Nov 3 7:19 AM
 • 1'
 • 12
p
 • 1-0
bit_kidon
(1993)
+6.4
PandaFrame
(1942)
-6.7

3 | 2
Atomic
Nov 3 7:14 AM
 • 6'
 • 54
p
 • 1-0
PandaFrame
(1933)
+9.4
bit_kidon
(2002)
-9

3 | 2
Atomic
Nov 3 7:11 AM
 • 3'
 • 25
p
 • 1-0
androse3
(2103)
+6.5
PandaFrame
(1937)
-4.4

3 | 2
Atomic
Nov 3 7:10 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1925)
+11.7
androse3
(2121)
-17.9

3 | 2
Atomic
Nov 3 7:08 AM
 • 2'
 • 21
p
 • 1-0
PandaFrame
(1920)
+5.3
wfxtagsuq
(1798)
-5.7

3 | 2
Atomic
Nov 3 7:06 AM
 • 2'
 • 23
p
 • 1-0
PandaFrame
(1913)
+7.4
eeeeeeeeeeeeeeeeee475
(1888)
-8.8

3 | 2
Atomic
Nov 3 6:59 AM
 • 7'
 • 59
p
 • 0-1
PandaFrame
(1906)
+6.3
robertoambriz014
(1833)
-7.2

3 | 2
Atomic
Nov 3 6:55 AM
 • 4'
 • 32
p
 • 1-0
Kobolld_king
(1813)
+10.9
PandaFrame
(1917)
-10.3

3 | 2
Atomic
Nov 3 6:51 AM
 • 4'
 • 41
p
 • 0-1
PandaFrame
(1915)
+1.6
gavinsusalla
(1516)
-3

3 | 2
Atomic
Nov 3 6:49 AM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1914)
+1.6
gavinsusalla
(1519)
-3.2

3 | 2
Atomic
Nov 3 6:07 AM
 • 2'
 • 16
p
 • 0-1
Neo2020v
(2128)
+5
PandaFrame
(1917)
-3.7

3 | 2
Atomic
Nov 3 5:57 AM
 • 10'
 • 120
p
 • 1-0
Neo2020v
(2123)
+5.3
PandaFrame
(1921)
-3.8

3 | 2
Atomic
Nov 3 5:49 AM
 • 7'
 • 49
p
 • 0-1
PandaFrame
(1912)
+9.6
heymaverick
(1991)
-12.9

3 | 2
Atomic
Nov 3 1:37 AM
 • 3'
 • 24
p
 • 1-0
bimbow
(1999)
+6.1
PandaFrame
(1918)
-6.2

3 | 2
Atomic
Nov 3 1:32 AM
 • 5'
 • 66
p
 • 0-1
bimbow
(1993)
+6.4
PandaFrame
(1924)
-6.5

3 | 2
Atomic
Nov 3 1:29 AM
 • 3'
 • 21
p
 • 0-1
Freepiece4you
(1879)
+8.8
PandaFrame
(1934)
-9.3

3 | 2
Atomic
Nov 3 1:27 AM
 • 2'
 • 18
p
 • 1-0
Freepiece4you
(1870)
+9.3
PandaFrame
(1943)
-9.8

3 | 2
Atomic
Nov 3 1:22 AM
 • 5'
 • 38
p
 • 0-1
PandaFrame
(1942)
+1.5
gaminggalaxy11111
(1537)
-2.1

3 | 2
Atomic
Nov 2 11:12 AM
 • 8'
 • 52
p
 • 0-1
PandaFrame
(1934)
+7.8
Unknownuser008
(1923)
-8.4

3 | 2
Atomic
Nov 2 11:08 AM
 • 1'
 • 13
p
 • 1-0
PandaFrame
(1933)
+1
MasonLovatt23
(1438)
-2.4

3 | 2
Atomic
Nov 2 11:03 AM
 • 5'
 • 88
p
 • 1-0
thistest016
(2012)
+8
PandaFrame
(1939)
-6.4

3 | 2
Atomic
Nov 2 11:01 AM
 • 2'
 • 20
p
 • 1-0
AndyNguyn
(1939)
+9.1
PandaFrame
(1948)
-8.3

3 | 2
Atomic
Nov 2 10:59 AM
 • 2'
 • 13
p
 • 1-0
PandaFrame
(1940)
+8
Unknownuser008
(1931)
-8.5

3 | 2
Atomic
Nov 2 10:56 AM
 • 4'
 • 26
p
 • 0-1
PandaFrame
(1931)
+8.5
Unknownuser008
(1940)
-9.1

3 | 2
Atomic
Nov 2 9:52 AM
 • 5'
 • 32
p
 • 0-1
PandaFrame
(1928)
+3.1
ThunderAndPawns
(1664)
-2.8

3 | 2
Atomic
Nov 2 9:51 AM
 • 2'
 • 14
p
 • 1-0
PandaFrame
(1925)
+3.2
ThunderAndPawns
(1667)
-2.9

3 | 2
Atomic
Nov 2 9:47 AM
 • 4'
 • 74
p
 • ½-½
PandaFrame
(1930)
-5.4
ThunderAndPawns
(1662)
+4.8

3 | 2
Atomic
Nov 2 9:46 AM
 • 1'
 • 17
p
 • 1-0
PandaFrame
(1929)
+0.9
pranetboi
(1416)
-2

3 | 2
Atomic
Nov 2 9:42 AM
 • 5'
 • 24
p
 • 1-0
Ashwin_ajit
(1901)
+10.1
PandaFrame
(1938)
-9

3 | 2
Atomic
Nov 2 9:38 AM
 • 3'
 • 36
p
 • 1-0
PandaFrame
(1935)
+3.2
Sajkaca
(1680)
-4.2

3 | 2
Atomic
Nov 2 3:34 AM
 • 3'
 • 14
p
 • 0-1
PandaFrame
(1931)
+4.6
chrschss
(1761)
-4.5

3 | 2
Atomic
Nov 2 3:27 AM
 • 7'
 • 63
p
 • 1-0
PandaFrame
(1926)
+4.8
chrschss
(1765)
-4.7

3 | 2
Atomic
Nov 2 3:25 AM
 • 2'
 • 14
p
 • 1-0
PandaFrame
(1921)
+4.7
kangzixuan
(1753)
-4.6

3 | 2
Atomic
Nov 2 3:22 AM
 • 3'
 • 18
p
 • 1-0
PandaFrame
(1916)
+4.9
kangzixuan
(1758)
-4.9

3 | 2
Atomic
Nov 2 3:17 AM
 • 5'
 • 33
p
 • 0-1
PandaFrame
(1911)
+5.1
kangzixuan
(1763)
-5.1

3 | 2
Atomic
Nov 2 3:16 AM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1906)
+5.4
kangzixuan
(1768)
-5.3

3 | 2
Atomic
Nov 2 3:15 AM
 • 2'
 • 21
p
 • 1-0
PandaFrame
(1904)
+1.8
user1319
(1518)
-4.4

3 | 2
Atomic
Nov 2 3:13 AM
 • 1'
 • 14
p
 • 0-1
PandaFrame
(1902)
+1.9
user1319
(1529)
-4.9

3 | 2
Atomic
Nov 2 1:42 AM
 • 5'
 • 28
p
 • 0-1
PandaFrame
(1899)
+2.9
Charlenator
(1625)
-2.9

3 | 2
Atomic
Nov 2 1:39 AM
 • 3'
 • 20
p
 • 1-0
daehangugin
(1529)
+22.1
PandaFrame
(1914)
-14.8

3 | 2
Atomic
Nov 2 1:36 AM
 • 3'
 • 30
p
 • 1-0
mandrello
(1962)
+8.5
PandaFrame
(1921)
-7.3

3 | 2
Atomic
Nov 2 1:30 AM
 • 4'
 • 29
p
 • 1-0
thanosbishop
(2112)
+7.1
PandaFrame
(1926)
-4.3

3 | 2
Atomic
Nov 2 1:26 AM
 • 4'
 • 26
p
 • 0-1
PandaFrame
(1924)
+1.9
Limora_Warlord
(1560)
-2.3

3 | 2
Atomic
Nov 2 1:24 AM
 • 2'
 • 14
p
 • 0-1
PandaFrame
(1922)
+1.9
Limora_Warlord
(1562)
-2.3

3 | 2
Atomic
Nov 2 1:21 AM
 • 4'
 • 27
p
 • 1-0
PandaFrame
(1920)
+2
Limora_Warlord
(1564)
-2.3

3 | 2
Atomic
Nov 1 3:43 AM
 • 4'
 • 32
p
 • 0-1
PandaFrame
(1913)
+6.5
TucsonFIN
(1844)
-7.4

3 | 2
Atomic
Nov 1 3:37 AM
 • 6'
 • 58
p
 • 0-1
PandaFrame
(1906)
+7.7
Zukixa
(1883)
-8.7

3 | 2
Atomic
Nov 1 3:34 AM
 • 3'
 • 37
p
 • 1-0
Sythym
(2141)
+5.1
PandaFrame
(1909)
-3.5

3 | 2
Atomic
Nov 1 3:30 AM
 • 4'
 • 28
p
 • 1-0
PandaFrame
(1902)
+7.1
chessalmostmaster
(1849)
-7.2

3 | 2
Atomic
Nov 1 3:28 AM
 • 3'
 • 20
p
 • 0-1
PandaFrame
(1901)
+1.1
kostia-t
(1432)
-1.3

3 | 2
Atomic
Nov 1 3:20 AM
 • 8'
 • 71
p
 • 0-1
chessalmostmaster
(1839)
+10.2
PandaFrame
(1911)
-9.9

3 | 2
Atomic
Nov 1 3:18 AM
 • 3'
 • 17
p
 • 1-0
chessalmostmaster
(1828)
+10.8
PandaFrame
(1921)
-10.4

3 | 2
Atomic
Oct 31 12:40 PM
 • 1'
 • 5
p
 • 0-1
PandaFrame
(1920)
+1.5
TheKnight545
(1499)
-4.5

3 | 2
Atomic
Oct 31 12:40 PM
 • 1'
 • 9
p
 • 1-0
Mumbaicha_Sushrut
(1827)
+10.4
PandaFrame
(1930)
-10.6

3 | 2
Atomic
Oct 31 12:38 PM
 • 2'
 • 18
p
 • 0-1
PandaFrame
(1929)
+1.4
Vasicd96
(1494)
-4.1

3 | 2
Atomic
Oct 31 12:35 PM
 • 3'
 • 28
p
 • 0-1
PandaFrame
(1926)
+3.1
PanFried3gg
(1668)
-3.1

3 | 2
Atomic
Oct 31 12:34 PM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1924)
+1.5
PuzzledCrown
(1500)
-4.4

3 | 2
Atomic
Oct 31 12:33 PM
 • 2'
 • 20
p
 • 1-0
PandaFrame
(1918)
+6.3
Mumbaicha_Sushrut
(1837)
-6.3

3 | 2
Atomic
Oct 31 12:31 PM
 • 3'
 • 23
p
 • 0-1
PandaFrame
(1912)
+6.6
Mumbaicha_Sushrut
(1843)
-6.7

3 | 2
Atomic
Oct 31 12:30 PM
 • 1'
 • 16
p
 • 1-0
dragonfire2
(2256)
+3.3
PandaFrame
(1914)
-2.1

3 | 2
Atomic
Oct 31 12:26 PM
 • 4'
 • 33
p
 • 0-1
dragonfire2
(2253)
+3.4
PandaFrame
(1916)
-2.2

3 | 2
Atomic
Oct 31 12:24 PM
 • 2'
 • 20
p
 • 0-1
PandaFrame
(1910)
+5.6
Jackaboy0918
(1795)
-5.7

3 | 2
Atomic
Oct 31 12:21 PM
 • 3'
 • 39
p
 • 0-1
PandaFrame
(1907)
+3.4
WolffA24
(1671)
-3.4

3 | 2
Atomic
Oct 31 12:21 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1903)
+3.7
mtuck90
(1684)
-5.2

3 | 2
Atomic
Oct 31 12:20 PM
 • 1'
 • 14
p
 • 1-0
PandaFrame
(1900)
+3.6
WolffA24
(1675)
-3.5

3 | 2
Atomic
Oct 31 12:19 PM
 • 2'
 • 26
p
 • 0-1
PandaFrame
(1896)
+3.7
WolffA24
(1678)
-3.6

3 | 2
Atomic
Oct 31 12:17 PM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1892)
+3.8
WolffA24
(1682)
-3.7

3 | 2
Atomic
Oct 31 12:17 PM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1888)
+4
WolffA24
(1686)
-3.9

3 | 2
Atomic
Oct 31 12:16 PM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1884)
+4.1
WolffA24
(1690)
-4

3 | 2
Atomic
Oct 31 12:15 PM
 • 2'
 • 18
p
 • 1-0
PandaFrame
(1880)
+4.2
WolffA24
(1694)
-4.1

3 | 2
Atomic
Oct 31 12:13 PM
 • 2'
 • 28
p
 • 1-0
PandaFrame
(1875)
+4.4
WolffA24
(1698)
-4.3

3 | 2
Atomic
Oct 31 12:12 PM
 • 2'
 • 24
p
 • 1-0
PandaFrame
(1871)
+4.6
WolffA24
(1703)
-4.5

3 | 2
Atomic
Oct 31 9:55 AM
 • 5'
 • 34
p
 • 0-1
PandaFrame
(1869)
+1.4
VizionNyan
(1452)
-2

3 | 2
Atomic
Oct 31 9:52 AM
 • 3'
 • 20
p
 • 0-1
PandaFrame
(1858)
+11.1
chesscience06
(1994)
-12.8

3 | 2
Atomic
Oct 31 9:50 AM
 • 2'
 • 16
p
 • 0-1
chesscience06
(1988)
+6.3
PandaFrame
(1864)
-5.4

3 | 2
Atomic
Oct 31 9:44 AM
 • 6'
 • 86
p
 • 0-1
PandaFrame
(1861)
+2.6
Vicgm01
(1563)
-2.5

3 | 2
Atomic
Oct 31 9:42 AM
 • 2'
 • 19
p
 • 1-0
PandaFrame
(1852)
+9.3
jetjelly
(1903)
-10.6

3 | 2
Atomic
Oct 31 9:41 AM
 • 1'
 • 6
p
 • 1-0
PandaFrame
(1850)
+2.2
laclefshukrute
(1514)
-2.1

3 | 2
Atomic
Oct 31 9:32 AM
 • 10'
 • 56
p
 • 0-1
Tommaso_pl
(1923)
+7.6
PandaFrame
(1856)
-6.7

3 | 2
Atomic
Oct 31 9:30 AM
 • 2'
 • 13
p
 • 1-0
PandaFrame
(1855)
+1.2
Amarak
(1406)
-1.6

3 | 2
Atomic
Oct 31 9:27 AM
 • 4'
 • 28
p
 • 1-0
Sythym
(2130)
+4.1
PandaFrame
(1858)
-2.9

3 | 2
Atomic
Oct 31 1:42 AM
 • 1'
 • 14
p
 • 1-0
deniss_dunaveckis
(1617)
+31.7
PandaFrame
(1870)
-12.6

3 | 2
Atomic
Oct 31 1:42 AM
 • 1'
 • 11
p
 • 1-0
PandaFrame
(1867)
+3.3
deniss_dunaveckis
(1625)
-8.4

3 | 2
Atomic
Oct 31 1:38 AM
 • 4'
 • 33
p
 • 1-0
deniss_dunaveckis
(1589)
+36.1
PandaFrame
(1880)
-12.9

3 | 2
Atomic
Oct 31 1:36 AM
 • 3'
 • 22
p
 • 0-1
deniss_dunaveckis
(1550)
+39.3
PandaFrame
(1893)
-13.4

3 | 2
Atomic
Oct 31 1:34 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1892)
+1.3
LoutinerRoooood
(1460)
-1.6

3 | 2
Atomic
Oct 31 1:33 AM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1882)
+9.9
Pumikooo
(1983)
-13.1

3 | 2
Atomic
Oct 30 2:13 PM
 • 8'
 • 84
p
 • 0-1
Mumbaicha_Sushrut
(1661)
+13.1
PandaFrame
(1895)
-12.4

3 | 2
Atomic
Oct 30 2:10 PM
 • 3'
 • 23
p
 • 1-0
GoNuclearChess
(1887)
+9.2
PandaFrame
(1903)
-8.1

3 | 2
Atomic
Oct 30 7:26 AM
 • 3'
 • 34
p
 • 1-0
khalidibnwalid592
(1682)
+12.1
PandaFrame
(1915)
-12.4

3 | 2
Atomic
Oct 30 7:23 AM
 • 4'
 • 23
p
 • 1-0
Che55n00b503
(2033)
+7
PandaFrame
(1921)
-5.4

3 | 2
Atomic
Oct 30 7:21 AM
 • 3'
 • 20
p
 • 0-1
Che55n00b503
(2025)
+7.5
PandaFrame
(1926)
-5.7

3 | 2
Atomic
Oct 30 7:16 AM
 • 5'
 • 31
p
 • 1-0
Che55n00b503
(2017)
+8
PandaFrame
(1932)
-6

3 | 2
Atomic
Oct 30 7:15 AM
 • 2'
 • 11
p
 • 1-0
MoreMao
(2159)
+3.8
PandaFrame
(1936)
-3.5

3 | 2
Atomic
Oct 30 7:09 AM
 • 6'
 • 60
p
 • 0-1
MoreMao
(2155)
+3.9
PandaFrame
(1940)
-3.7

3 | 2
Atomic
Oct 30 7:06 AM
 • 3'
 • 22
p
 • 0-1
PandaFrame
(1936)
+3.3
DiniSampaio
(1700)
-3.7

3 | 2
Atomic
Oct 30 7:05 AM
 • 1'
 • 16
p
 • 0-1
PandaFrame
(1933)
+3.4
DiniSampaio
(1704)
-3.8

3 | 2
Atomic
Oct 30 7:02 AM
 • 3'
 • 18
p
 • 1-0
PandaFrame
(1929)
+3.5
DiniSampaio
(1708)
-3.9

3 | 2
Atomic
Oct 30 6:52 AM
 • 11'
 • 35
p
 • 0-1
MoreMao
(2151)
+3.9
PandaFrame
(1933)
-3.6

3 | 2
Atomic
Oct 29 2:43 PM
 • 14'
 • 57
p
 • ½-½
NHtakesKing
(1953)
-0.5
PandaFrame
(1932)
+0.5

3 | 2
Atomic
Oct 29 2:28 PM
 • 14'
 • 17
p
 • 0-1
PandaFrame
(1924)
+8.3
menderus
(1937)
-8.1

3 | 2
Atomic
Oct 29 2:27 PM
 • 2'
 • 12
p
 • 1-0
PandaFrame
(1915)
+8.7
menderus
(1946)
-8.5

3 | 2
Atomic
Oct 29 2:21 PM
 • 7'
 • 36
p
 • 0-1
EnormousBlunt69420
(2040)
+6
PandaFrame
(1921)
-5.5

3 | 2
Atomic
Oct 29 2:18 PM
 • 3'
 • 9
p
 • 1-0
PandaFrame
(1917)
+4.1
Jeremy1983007
(1723)
-4

3 | 2
Atomic
Oct 29 11:55 AM
 • 4'
 • 35
p
 • 1-0
PandaFrame
(1911)
+6
PygmaIion
(1816)
-6.9

3 | 2
Atomic
Oct 29 1:38 AM
 • 3'
 • 19
p
 • 1-0
mokuci99
(1908)
+8
PandaFrame
(1919)
-8.5

3 | 2
Atomic
Oct 29 1:35 AM
 • 3'
 • 18
p
 • 0-1
mokuci99
(1900)
+8.4
PandaFrame
(1928)
-9

3 | 2
Atomic
Oct 29 1:31 AM
 • 5'
 • 28
p
 • 0-1
PandaFrame
(1920)
+8.1
mokuci99
(1907)
-7.5

3 | 2
Atomic
Oct 29 1:30 AM
 • 1'
 • 14
p
 • 1-0
PandaFrame
(1912)
+8.7
mokuci99
(1915)
-8

3 | 2
Atomic
Oct 29 1:25 AM
 • 5'
 • 32
p
 • 0-1
PandaFrame
(1902)
+9.2
mokuci99
(1923)
-8.4

3 | 2
Atomic
Oct 29 1:24 AM
 • 2'
 • 16
p
 • 1-0
PandaFrame
(1893)
+9.8
mokuci99
(1932)
-8.9

3 | 2
Atomic
Oct 29 1:19 AM
 • 4'
 • 34
p
 • 1-0
lightmoon14
(1673)
+27.3
PandaFrame
(1906)
-13.7

3 | 2
Atomic
Oct 29 1:16 AM
 • 4'
 • 29
p
 • 0-1
lightmoon14
(1643)
+29.8
PandaFrame
(1921)
-14.3

3 | 2
Atomic
Oct 29 1:13 AM
 • 4'
 • 33
p
 • 1-0
lightmoon14
(1611)
+32.1
PandaFrame
(1935)
-14.9

3 | 2
Atomic
Oct 29 1:11 AM
 • 2'
 • 19
p
 • 1-0
PandaFrame
(1934)
+1.3
Aqua_killer_022
(1478)
-2.9

3 | 2
Atomic
Oct 29 1:08 AM
 • 3'
 • 23
p
 • 1-0
MassiveAn
(1778)
+12.9
PandaFrame
(1947)
-12.7

3 | 2
Atomic
Oct 29 1:00 AM
 • 8'
 • 57
p
 • 0-1
PandaFrame
(1938)
+8.4
Tommaso_pl
(1920)
-8.4

3 | 2
Atomic
Oct 29 12:55 AM
 • 5'
 • 34
p
 • 1-0
PandaFrame
(1936)
+2.2
VitalikGorbatenko
(1589)
-2.3

3 | 2
Atomic
Oct 29 12:53 AM
 • 3'
 • 23
p
 • 0-1
lightmoon14
(1555)
+37.3
PandaFrame
(1952)
-15.6

3 | 2
Atomic
Oct 29 12:23 AM
 • 5'
 • 28
p
 • 0-1
am_i_unique
(2216)
+2.9
PandaFrame
(1955)
-3.3

3 | 2
Atomic
Oct 29 12:22 AM
 • 1'
 • 13
p
 • 1-0
am_i_unique
(2213)
+3
PandaFrame
(1958)
-3.4

3 | 2
Atomic
Oct 29 12:21 AM
 • 1'
 • 10
p
 • 1-0
PandaFrame
(1944)
+14.8
am_i_unique
(2226)
-12.7

3 | 2
Atomic
Oct 29 12:16 AM
 • 5'
 • 63
p
 • 1-0
am_i_unique
(2223)
+2.6
PandaFrame
(1947)
-3.1

3 | 2
Atomic
Oct 29 12:14 AM
 • 3'
 • 26
p
 • 0-1
PandaFrame
(1944)
+2.7
purple_fish_of_doom
(1639)
-2.4

3 | 2
Atomic
Oct 28 3:22 PM
 • 9'
 • 47
p
 • 1-0
happinessbunny
(2252)
+3.5
PandaFrame
(1947)
-2.7

3 | 2
Atomic
Oct 28 3:18 PM
 • 4'
 • 26
p
 • 0-1
happinessbunny
(2248)
+3.6
PandaFrame
(1950)
-2.8

3 | 2
Atomic
Oct 28 3:12 PM
 • 6'
 • 34
p
 • 1-0
biloly
(2127)
+6.1
PandaFrame
(1954)
-4.8

3 | 2
Atomic
Oct 28 3:10 PM
 • 2'
 • 16
p
 • 1-0
PandaFrame
(1951)
+2.9
Matixdg
(1659)
-2.6

3 | 2
Atomic
Oct 28 3:01 PM
 • 9'
 • 13
p
 • 0-1
PandaFrame
(1944)
+7
MatthewHou
(1871)
-7.2

3 | 2
Atomic
Oct 28 2:56 PM
 • 6'
 • 44
p
 • 0-1
PandaFrame
(1943)
+1.7
EmadMoghnieh
(1546)
-1.6

3 | 2
Atomic
Oct 28 2:50 PM
 • 6'
 • 16
p
 • 1-0
PandaFrame
(1941)
+2.1
timmyloto
(1580)
-2

3 | 2
Atomic
Oct 28 2:48 PM
 • 2'
 • 13
p
 • 1-0
PandaFrame
(1939)
+2.1
timmyloto
(1582)
-2.1

3 | 2
Atomic
Oct 28 2:43 PM
 • 5'
 • 49
p
 • 1-0
timmyloto
(1567)
+15.5
PandaFrame
(1954)
-15.7

3 | 2
Atomic
Oct 28 2:42 PM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1953)
+1.4
FakeIntellectual
(1518)
-2.8

3 | 2
Atomic
Oct 28 2:41 PM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1951)
+1.8
timmyloto
(1574)
-1.8

3 | 2
Atomic
Oct 28 2:39 PM
 • 3'
 • 25
p
 • 0-1
PandaFrame
(1949)
+1.8
timmyloto
(1576)
-1.9

3 | 2
Atomic
Oct 28 2:36 PM
 • 3'
 • 30
p
 • 0-1
PandaFrame
(1947)
+1.9
timmyloto
(1578)
-1.9

3 | 2
Atomic
Oct 28 2:30 PM
 • 6'
 • 29
p
 • 0-1
dash260
(1941)
+8.9
PandaFrame
(1956)
-8.6

3 | 2
Atomic
Oct 28 2:29 PM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1948)
+8.4
Temperatur
(1950)
-9.4

3 | 2
Atomic
Oct 28 2:26 PM
 • 3'
 • 31
p
 • 1-0
PandaFrame
(1944)
+3.2
Jeremy1983007
(1687)
-2.9

3 | 2
Atomic
Oct 27 8:33 AM
 • 4'
 • 30
p
 • 1-0
HondaPL
(1633)
+22.2
PandaFrame
(1959)
-14.4

3 | 2
Atomic
Oct 27 8:32 AM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1956)
+2.4
HondaPL
(1636)
-3.7

3 | 2
Atomic
Oct 27 8:28 AM
 • 4'
 • 27
p
 • 1-0
HondaPL
(1613)
+23.2
PandaFrame
(1971)
-14.5

3 | 2
Atomic
Oct 27 8:25 AM
 • 4'
 • 19
p
 • 1-0
PandaFrame
(1969)
+2
HondaPL
(1616)
-3.2

3 | 2
Atomic
Oct 27 8:20 AM
 • 3'
 • 11
p
 • 0-1
PandaFrame
(1967)
+1.9
scars2468
(1601)
-1.8

3 | 2
Atomic
Oct 27 8:17 AM
 • 3'
 • 18
p
 • 0-1
PandaFrame
(1965)
+2.1
LowlyUruk
(1622)
-2

3 | 2
Atomic
Oct 27 8:10 AM
 • 3'
 • 22
p
 • 0-1
PandaFrame
(1960)
+4.7
church17
(1801)
-4.9

3 | 2
Atomic
Oct 27 8:08 AM
 • 2'
 • 14
p
 • 0-1
PandaFrame
(1955)
+4.9
church17
(1806)
-5.2

3 | 2
Atomic
Oct 27 8:04 AM
 • 5'
 • 57
p
 • 1-0
Bringitbro80
(2071)
+7.5
PandaFrame
(1961)
-5.7

3 | 2
Atomic
Oct 27 8:02 AM
 • 2'
 • 19
p
 • 0-1
PandaFrame
(1956)
+4.8
PeterSimonKosut
(1799)
-4.9

3 | 2
Atomic
Oct 27 8:00 AM
 • 2'
 • 19
p
 • 0-1
PandaFrame
(1950)
+6.8
scorpions_blancs
(1887)
-7.1

3 | 2
Atomic
Oct 27 7:54 AM
 • 6'
 • 36
p
 • 0-1
scorpions_blancs
(1876)
+10.7
PandaFrame
(1960)
-10.2

3 | 2
Atomic
Oct 27 7:47 AM
 • 7'
 • 44
p
 • 0-1
PandaFrame
(1957)
+2.2
DoraDaDestroyer
(1626)
-2.3

3 | 2
Atomic
Oct 27 7:47 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1957)
+1
RozarioXxx
(1450)
-2.4

3 | 2
Atomic
Oct 27 7:45 AM
 • 3'
 • 28
p
 • 0-1
PandaFrame
(1955)
+1.9
orenthrpro
(1594)
-3.4

3 | 2
Atomic
Oct 27 7:38 AM
 • 7'
 • 44
p
 • 1-0
PandaFrame
(1942)
+12.5
INTHENEXTMOVE
(2173)
-20.5

3 | 2
Atomic
Oct 27 7:34 AM
 • 4'
 • 33
p
 • 0-1
PandaFrame
(1940)
+2
DoraDaDestroyer
(1590)
-2.1

3 | 2
Atomic
Oct 27 7:33 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1938)
+2
DoraDaDestroyer
(1593)
-2.1

3 | 2
Atomic
Oct 27 7:29 AM
 • 4'
 • 28
p
 • 0-1
PandaFrame
(1934)
+4.2
ZenaMajkaKraljica
(1757)
-4.3

3 | 2
Atomic
Oct 27 7:27 AM
 • 3'
 • 9
p
 • 0-1
PandaFrame
(1929)
+4.7
Huson35
(1779)
-5

3 | 2
Atomic
Oct 27 6:18 AM
 • 2'
 • 16
p
 • 0-1
Kecknight
(1568)
+13.8
PandaFrame
(1943)
-14.1

3 | 2
Atomic
Oct 27 6:16 AM
 • 2'
 • 15
p
 • 1-0
Parsilius
(1600)
+13.9
PandaFrame
(1957)
-13.8

3 | 2
Atomic
Oct 27 6:10 AM
 • 7'
 • 56
p
 • 1-0
AverageBeginner
(1725)
+13
PandaFrame
(1970)
-12.3

3 | 2
Atomic
Oct 27 6:07 AM
 • 3'
 • 22
p
 • 1-0
Mstake5
(2070)
+7.7
PandaFrame
(1975)
-5.6

3 | 2
Atomic
Oct 27 6:00 AM
 • 8'
 • 40
p
 • 0-1
Mstake5
(2062)
+8.3
PandaFrame
(1981)
-6

3 | 2
Atomic
Oct 27 5:59 AM
 • 1'
 • 11
p
 • 1-0
PandaFrame
(1971)
+9.9
Mstake5
(2076)
-14.2

3 | 2
Atomic
Oct 27 5:55 AM
 • 4'
 • 24
p
 • 1-0
Cab7nd
(1990)
+8.3
PandaFrame
(1979)
-7.5

3 | 2
Atomic
Oct 27 5:51 AM
 • 5'
 • 27
p
 • 1-0
PandaFrame
(1970)
+8.5
Cab7nd
(1999)
-9.4

3 | 2
Atomic
Oct 27 5:47 AM
 • 4'
 • 25
p
 • 1-0
Cab7nd
(1991)
+8.5
PandaFrame
(1978)
-7.6

3 | 2
Atomic
Oct 27 5:45 AM
 • 2'
 • 11
p
 • 1-0
PandaFrame
(1969)
+8.7
Cab7nd
(2000)
-9.7

3 | 2
Atomic
Oct 27 5:40 AM
 • 5'
 • 41
p
 • 1-0
dash260
(1926)
+9.4
PandaFrame
(1978)
-9.2

3 | 2
Atomic
Oct 27 5:38 AM
 • 3'
 • 33
p
 • 1-0
PandaFrame
(1976)
+2.4
Stam_theo_04
(1668)
-2.5

3 | 2
Atomic
Oct 27 5:32 AM
 • 6'
 • 55
p
 • 1-0
LC12345qwerty
(1821)
+11.6
PandaFrame
(1988)
-11.6

3 | 2
Atomic
Oct 27 5:30 AM
 • 2'
 • 14
p
 • 0-1
PandaFrame
(1981)
+7
dash260
(1933)
-7.2

3 | 2
Atomic
Oct 27 5:28 AM
 • 2'
 • 12
p
 • 1-0
PandaFrame
(1977)
+3.7
PotatoIQ41
(1761)
-3.8

3 | 2
Atomic
Oct 27 5:26 AM
 • 3'
 • 25
p
 • 1-0
PandaFrame
(1971)
+6
chessypm132
(1873)
-5.8

3 | 2
Atomic
Oct 27 1:21 AM
 • 8'
 • 68
p
 • 0-1
jokerofficial
(2342)
+2.3
PandaFrame
(1973)
-1.8

3 | 2
Atomic
Oct 27 1:19 AM
 • 2'
 • 13
p
 • 1-0
PandaFrame
(1958)
+14.4
EagleOnHigh
(2350)
-28.1

3 | 2
Atomic
Oct 27 1:18 AM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1948)
+10.8
iostratme
(2079)
-14.6

3 | 2
Atomic
Oct 27 1:14 AM
 • 4'
 • 23
p
 • 1-0
StarriderXTZ
(2093)
+6.5
PandaFrame
(1953)
-5

3 | 2
Atomic
Oct 27 1:12 AM
 • 2'
 • 14
p
 • 1-0
PandaFrame
(1941)
+11.6
StarriderXTZ
(2108)
-15.3

3 | 2
Atomic
Oct 27 1:04 AM
 • 8'
 • 57
p
 • 0-1
a_love_easy
(1738)
+12.9
PandaFrame
(1954)
-12.6

3 | 2
Atomic
Oct 26 11:43 AM
 • 6'
 • 29
p
 • 1-0
dsoarhsh
(2025)
+6.8
PandaFrame
(1960)
-6.7

3 | 2
Atomic
Oct 26 11:41 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1956)
+4.7
Nicola11235
(1791)
-4.8

3 | 2
Atomic
Oct 26 11:39 AM
 • 3'
 • 22
p
 • 1-0
Nicola11235
(1779)
+12.5
PandaFrame
(1968)
-12.3

3 | 2
Atomic
Oct 26 11:38 AM
 • 1'
 • 8
p
 • 0-1
Nicola11235
(1766)
+13
PandaFrame
(1981)
-12.8

3 | 2
Atomic
Oct 26 11:35 AM
 • 3'
 • 25
p
 • 1-0
Sythym
(2125)
+7.2
PandaFrame
(1986)
-5.2

3 | 2
Atomic
Oct 26 11:26 AM
 • 8'
 • 89
p
 • 0-1
PandaFrame
(1984)
+1.7
scars2468
(1597)
-1.6

3 | 2
Atomic
Oct 26 11:25 AM
 • 2'
 • 12
p
 • 1-0
PandaFrame
(1980)
+3.9
PotatoIQ41
(1770)
-3.9

3 | 2
Atomic
Oct 26 11:24 AM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1976)
+4.8
jetjelly
(1818)
-5.2

3 | 2
Atomic
Oct 26 11:23 AM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1972)
+3.7
LunaRocks
(1748)
-3.6

3 | 2
Atomic
Oct 26 11:21 AM
 • 2'
 • 14
p
 • 1-0
PandaFrame
(1969)
+3
davidbg
(1701)
-2.8

3 | 2
Atomic
Oct 26 11:16 AM
 • 5'
 • 34
p
 • 0-1
Milka6975
(1931)
+10.8
PandaFrame
(1978)
-9.4

3 | 2
Atomic
Oct 26 11:14 AM
 • 2'
 • 25
p
 • 1-0
PandaFrame
(1978)
+0.6
Vsevolod_Burlak
(1387)
-0.6

3 | 2
Atomic
Oct 26 10:27 AM
 • 1'
 • 9
p
 • 1-0
PandaFrame
(1977)
+0.9
Meth_Heisenberg
(1465)
-1.8

3 | 2
Atomic
Oct 26 10:25 AM
 • 1'
 • 11
p
 • 1-0
PandaFrame
(1973)
+3.7
chessalmostmaster
(1758)
-3.8

3 | 2
Atomic
Oct 26 10:21 AM
 • 1'
 • 9
p
 • 0-1
PandaFrame
(1968)
+5
ERR40
(1823)
-5.2

3 | 2
Atomic
Oct 26 10:18 AM
 • 3'
 • 26
p
 • 0-1
PandaFrame
(1963)
+5.2
ERR40
(1829)
-5.5

3 | 2
Atomic
Oct 26 10:16 AM
 • 2'
 • 17
p
 • 0-1
PandaFrame
(1957)
+5.5
ERR40
(1835)
-5.8

3 | 2
Atomic
Oct 26 10:15 AM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1952)
+5.3
AmericoSculati
(1821)
-5.7

3 | 2
Atomic
Oct 26 10:12 AM
 • 4'
 • 18
p
 • 0-1
PandaFrame
(1946)
+5.6
AmericoSculati
(1828)
-6

3 | 2
Atomic
Oct 26 10:06 AM
 • 6'
 • 40
p
 • 0-1
dsoarhsh
(2009)
+7.1
PandaFrame
(1953)
-7.1

3 | 2
Atomic
Oct 26 10:04 AM
 • 3'
 • 32
p
 • 0-1
PandaFrame
(1951)
+2.1
mohamed_nawwar_1
(1601)
-2

3 | 2
Atomic
Oct 26 10:02 AM
 • 2'
 • 14
p
 • 0-1
PandaFrame
(1950)
+1.7
byeinthethy
(1556)
-2.3

3 | 2
Atomic
Oct 26 10:01 AM
 • 2'
 • 13
p
 • 1-0
PandaFrame
(1944)
+5.7
AmericoSculati
(1830)
-6.2

3 | 2
Atomic
Oct 26 8:59 AM
 • 1'
 • 6
p
 • ½-½
PringiRene
(2169)
-5.1
PandaFrame
(1939)
+4.7

3 | 2
Atomic
Oct 26 8:55 AM
 • 5'
 • 27
p
 • 0-1
PringiRene
(2165)
+4
PandaFrame
(1943)
-3.7

3 | 2
Atomic
Oct 26 8:46 AM
 • 9'
 • 77
p
 • 1-0
PringiRene
(2161)
+4.1
PandaFrame
(1947)
-3.9

3 | 2
Atomic
Oct 26 8:42 AM
 • 5'
 • 32
p
 • 0-1
PringiRene
(2156)
+4.3
PandaFrame
(1951)
-4

3 | 2
Atomic
Oct 26 8:37 AM
 • 5'
 • 31
p
 • 0-1
PandaFrame
(1938)
+13.2
PringiRene
(2171)
-14.3

3 | 2
Atomic
Oct 26 8:36 AM
 • 1'
 • 10
p
 • 1-0
PandaFrame
(1924)
+13.6
PringiRene
(2185)
-14.8

3 | 2
Atomic
Oct 26 8:33 AM
 • 3'
 • 17
p
 • 1-0
PringiRene
(2182)
+3.5
PandaFrame
(1927)
-3.2

3 | 2
Atomic
Oct 25 11:51 AM
 • 8'
 • 62
p
 • 1-0
Cab7nd
(1995)
+7.8
PandaFrame
(1934)
-6.9

3 | 2
Atomic
Oct 25 11:45 AM
 • 6'
 • 50
p
 • 0-1
Cab7nd
(1987)
+8.3
PandaFrame
(1942)
-7.4

3 | 2
Atomic
Oct 25 11:43 AM
 • 2'
 • 22
p
 • 1-0
PandaFrame
(1933)
+8.8
ZEYNEPSe
(1943)
-8

3 | 2
Atomic
Oct 25 11:42 AM
 • 2'
 • 13
p
 • 1-0
ZEYNEPSe
(1935)
+8
PandaFrame
(1942)
-8.9

3 | 2
Atomic
Oct 25 11:34 AM
 • 8'
 • 79
p
 • 0-1
PandaFrame
(1931)
+10.4
Cab7nd
(1997)
-11.3

3 | 2
Atomic
Oct 25 11:30 AM
 • 4'
 • 34
p
 • 0-1
Cab7nd
(1989)
+8.4
PandaFrame
(1939)
-7.7

3 | 2
Atomic
Oct 25 8:46 AM
 • 2'
 • 19
p
 • 1-0
PandaFrame
(1935)
+4.2
Edward_Shiddy
(1721)
-4

3 | 2
Atomic
Oct 25 8:40 AM
 • 6'
 • 40
p
 • 0-1
steoheonks
(1936)
+9.3
PandaFrame
(1944)
-9.3

3 | 2
Atomic
Oct 25 8:35 AM
 • 5'
 • 40
p
 • 0-1
bit_kidon
(1996)
+6.6
PandaFrame
(1952)
-8.2

3 | 2
Atomic
Oct 25 8:33 AM
 • 2'
 • 22
p
 • 0-1
PandaFrame
(1951)
+1.1
Checkhateu
(1463)
-1

3 | 2
Atomic
Oct 25 8:30 AM
 • 3'
 • 26
p
 • 0-1
PandaFrame
(1950)
+1.1
T0DAYY
(1449)
-1.2

3 | 2
Atomic
Oct 25 8:29 AM
 • 2'
 • 18
p
 • 0-1
PandaFrame
(1949)
+1.1
T0DAYY
(1450)
-1.2

3 | 2
Atomic
Oct 25 8:28 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1947)
+1.6
jonat96
(1527)
-2.1

3 | 2
Atomic
Oct 25 8:28 AM
 • 1'
 • 11
p
 • 1-0
PandaFrame
(1946)
+1.6
jonat96
(1529)
-2.1

3 | 2
Atomic
Oct 25 1:26 AM
 • 2'
 • 14
p
 • 1-0
PandaFrame
(1939)
+6.9
jingxuanyin
(1855)
-6.3

3 | 2
Atomic
Oct 25 1:21 AM
 • 5'
 • 17
p
 • 0-1
PandaFrame
(1936)
+2.8
Jansonien
(1633)
-2.8

3 | 2
Atomic
Oct 25 1:17 AM
 • 5'
 • 27
p
 • 1-0
PandaFrame
(1932)
+4.6
King_of_era_001
(1740)
-4

3 | 2
Atomic
Oct 25 1:14 AM
 • 3'
 • 39
p
 • 1-0
EagleOnHigh
(2420)
+2.4
PandaFrame
(1933)
-1.1

3 | 2
Atomic
Oct 25 1:08 AM
 • 5'
 • 52
p
 • 0-1
PandaFrame
(1931)
+1.7
Moritz2509
(1531)
-1.9

3 | 2
Atomic
Oct 25 1:07 AM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1929)
+1.7
Moritz2509
(1533)
-1.9

3 | 2
Atomic
Oct 24 11:57 AM
 • 3'
 • 20
p
 • 1-0
PandaFrame
(1921)
+7.9
Jackaboy0918
(1887)
-7.9

3 | 2
Atomic
Oct 24 11:55 AM
 • 3'
 • 22
p
 • 1-0
Jackaboy0918
(1877)
+10.2
PandaFrame
(1932)
-10.3

3 | 2
Explosive Fight
Oct 24 11:51 AM
 • 5'
 • 48
p
 • 0-1
Vikrum_29
(1509)
+40.7
PandaFrame
(1948)
-16

3 | 2
Explosive Fight
Oct 24 11:47 AM
 • 4'
 • 29
p
 • 1-0
PandaFrame
(1936)
+11.4
YouAreMyMoon
(2044)
-16.2

3 | 2
Atomic
Oct 24 1:12 AM
 • 6'
 • 37
p
 • 0-1
yc0202
(1508)
+17
PandaFrame
(1954)
-16.7

3 | 2
Atomic
Oct 24 1:11 AM
 • 2'
 • 11
p
 • 1-0
PandaFrame
(1949)
+4.5
hannesmkinen
(1753)
-4.2

3 | 2
Atomic
Oct 24 1:07 AM
 • 4'
 • 26
p
 • 0-1
PandaFrame
(1941)
+8.2
olikim7
(1909)
-8.5

3 | 2
Atomic
Oct 23 10:27 PM
 • 1'
 • 13
p
 • 1-0
PandaFrame
(1927)
+13.5
xRegency
(2117)
-16.6

3 | 2
Atomic
Oct 23 10:22 PM
 • 5'
 • 19
p
 • 1-0
xRegency
(2111)
+6.1
PandaFrame
(1932)
-4.9

3 | 2
Atomic
Oct 23 3:26 PM
 • 7'
 • 72
p
 • 0-1
Nickola97
(1888)
+10.1
PandaFrame
(1943)
-10.7

3 | 2
Atomic
Oct 23 3:22 PM
 • 3'
 • 20
p
 • 0-1
PandaFrame
(1942)
+1.2
EKilometers
(1467)
-1.9

3 | 2
Atomic
Oct 22 2:45 AM
 • 4'
 • 62
p
 • 1-0
Pumikooo
(1888)
+9.8
PandaFrame
(1953)
-11

3 | 2
Atomic
Oct 22 2:45 AM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1945)
+8.2
Pumikooo
(1895)
-7.2

3 | 2
Atomic
Oct 22 2:45 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1943)
+1.4
youlosth
(1486)
-3.5

3 | 2
Atomic
Oct 22 2:44 AM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1935)
+8.7
Pumikooo
(1903)
-7.7

3 | 2
Atomic
Oct 22 2:38 AM
 • 5'
 • 47
p
 • 0-1
PandaFrame
(1927)
+7.2
SkyLadri
(1830)
-5.9

3 | 2
Atomic
Oct 22 2:07 AM
 • 2'
 • 19
p
 • 1-0
laszlopencsev
(2092)
+5.6
PandaFrame
(1933)
-5.8

3 | 2
Atomic
Oct 22 2:02 AM
 • 5'
 • 50
p
 • 0-1
laszlopencsev
(2086)
+6
PandaFrame
(1939)
-6.2

3 | 2
Atomic
Oct 22 1:58 AM
 • 4'
 • 48
p
 • 0-1
laszlopencsev
(2080)
+6.4
PandaFrame
(1946)
-6.6

3 | 2
Atomic
Oct 21 8:29 AM
 • 4'
 • 54
p
 • 0-1
PandaFrame
(1938)
+8.3
JeanSIsii
(1861)
-6.8

3 | 2
Atomic
Oct 21 8:27 AM
 • 3'
 • 28
p
 • 1-0
PandaFrame
(1929)
+8.9
JeanSIsii
(1868)
-7.2

3 | 2
Atomic
Oct 21 8:26 AM
 • 2'
 • 9
p
 • 1-0
benigncyclops
(1952)
+8.6
PandaFrame
(1939)
-10.7

3 | 2
Atomic
Oct 21 8:17 AM
 • 9'
 • 106
p
 • 1-0
kdkdkdidkd
(1583)
+35.1
PandaFrame
(1959)
-19.7

3 | 2
Atomic
Oct 21 8:15 AM
 • 3'
 • 28
p
 • 1-0
kdkdkdidkd
(1546)
+37
PandaFrame
(1979)
-20.3

3 | 2
Atomic
Oct 21 8:10 AM
 • 4'
 • 27
p
 • 0-1
PandaFrame
(1978)
+1.2
Azmqn
(1460)
-0.9

3 | 2
Atomic
Oct 21 8:09 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1977)
+1.4
ohhhhmacacaco
(1498)
-1.5

3 | 2
Atomic
Oct 21 8:02 AM
 • 7'
 • 101
p
 • ½-½
ohhhhmacacaco
(1487)
+10.4
PandaFrame
(1987)
-9.8

3 | 2
Atomic
Oct 21 8:01 AM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1985)
+1.7
el_gato_enojon
(1533)
-2.6

3 | 2
Atomic
Oct 21 8:00 AM
 • 1'
 • 10
p
 • 1-0
PandaFrame
(1983)
+1.7
el_gato_enojon
(1535)
-2.7

3 | 2
Atomic
Oct 21 7:59 AM
 • 2'
 • 10
p
 • 0-1
PandaFrame
(1981)
+1.7
el_gato_enojon
(1538)
-2.8

3 | 2
Atomic
Oct 21 7:59 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1981)
+0.8
MyFriendIamNotyourFriend
(1398)
-1.3

3 | 2
Atomic
Oct 21 7:58 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1980)
+0.7
haydenlogsdon
(1356)
-0.9

3 | 2
Atomic
Oct 21 7:57 AM
 • 2'
 • 16
p
 • 0-1
PandaFrame
(1979)
+1.4
isaiahlowe
(1499)
-2.4

3 | 2
Atomic
Oct 21 7:55 AM
 • 2'
 • 20
p
 • 0-1
PandaFrame
(1977)
+1.4
isaiahlowe
(1501)
-2.5

3 | 2
Atomic
Oct 21 7:53 AM
 • 2'
 • 22
p
 • 0-1
PandaFrame
(1976)
+1.1
MyFriendIamNotyourFriend
(1451)
-2.2

3 | 2
Atomic
Oct 21 7:52 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1975)
+1.4
your_trash-kid
(1500)
-3.4

3 | 2
Atomic
Oct 21 7:51 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1973)
+1.4
U-Like-Wendys
(1497)
-3.3

3 | 2
Atomic
Oct 21 7:51 AM
 • 1'
 • 17
p
 • 1-0
PandaFrame
(1972)
+1.4
U-Like-Wendys
(1500)
-3.5

3 | 2
Atomic
Oct 21 7:50 AM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1970)
+1.4
damnrules
(1500)
-3.5

3 | 2
Atomic
Oct 21 7:48 AM
 • 2'
 • 17
p
 • 1-0
PandaFrame
(1969)
+1
samuelherrera12
(1439)
-1

3 | 2
Atomic
Oct 21 7:47 AM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1968)
+1.1
yeetakis
(1448)
-2.2

3 | 2
Atomic
Oct 21 7:46 AM
 • 1'
 • 9
p
 • 0-1
PandaFrame
(1962)
+6.6
JTDadestroya
(1841)
-5.8

3 | 2
Atomic
Oct 21 7:45 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1960)
+1.3
JG29
(1469)
-2.8

3 | 2
Atomic
Oct 21 7:44 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1959)
+1.3
JG29
(1472)
-2.9

3 | 2
Atomic
Oct 21 7:44 AM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1958)
+1.3
JG29
(1475)
-3

3 | 2
Atomic
Oct 21 7:42 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1956)
+1.5
BulletMatrixConqueror
(1500)
-3.8

3 | 2
Atomic
Oct 21 7:38 AM
 • 5'
 • 43
p
 • 0-1
xRegency
(2082)
+7.5
PandaFrame
(1963)
-6.4

3 | 2
Atomic
Oct 21 7:37 AM
 • 1'
 • 7
p
 • 0-1
PandaFrame
(1961)
+2.2
AceFinka
(1595)
-1.8

3 | 2
Atomic
Oct 21 7:37 AM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1960)
+1
sir_kobayashi
(1431)
-1.4

3 | 2
Atomic
Oct 21 7:36 AM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1959)
+1
sir_kobayashi
(1433)
-1.4

3 | 2
Atomic
Oct 21 7:35 AM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1958)
+1
sir_kobayashi
(1434)
-1.4

3 | 2
Atomic
Oct 21 7:32 AM
 • 4'
 • 25
p
 • 0-1
M2U7I9I6
(2387)
+2.8
PandaFrame
(1959)
-1.6

3 | 2
Atomic
Oct 21 7:31 AM
 • 1'
 • 21
p
 • 1-0
PandaFrame
(1958)
+1.4
chess_player_sandith
(1500)
-3.7

3 | 2
Atomic
Oct 21 7:30 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1957)
+1.4
God_1_2
(1500)
-3.8

3 | 2
Atomic
Oct 21 5:03 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1955)
+1.3
GG_EZ_Rematch
(1495)
-1.2

3 | 2
Atomic
Oct 21 4:56 AM
 • 7'
 • 46
p
 • 1-0
dimondimka
(2143)
+6.4
PandaFrame
(1960)
-4.6

3 | 2
Atomic
Oct 21 4:53 AM
 • 3'
 • 26
p
 • 0-1
dimondimka
(2136)
+6.9
PandaFrame
(1965)
-4.9

3 | 2
Atomic
Oct 21 4:49 AM
 • 5'
 • 35
p
 • 1-0
MarthLikinte
(2028)
+9.7
PandaFrame
(1972)
-7.5

3 | 2
Atomic
Oct 21 4:46 AM
 • 3'
 • 31
p
 • 1-0
PandaFrame
(1970)
+2.4
antonyrthekkethala
(1632)
-2.3

3 | 2
Atomic
Oct 21 4:42 AM
 • 5'
 • 49
p
 • 1-0
PandaFrame
(1969)
+1.3
Esaciel
(1496)
-3.4

3 | 2
Atomic
Oct 21 4:41 AM
 • 1'
 • 9
p
 • 0-1
PandaFrame
(1968)
+1.3
Esaciel
(1500)
-3.6

3 | 2
Atomic
Oct 21 4:35 AM
 • 7'
 • 76
p
 • 0-1
PandaFrame
(1965)
+2.8
Lord123091
(1669)
-2.6

3 | 2
Atomic
Oct 21 4:34 AM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1964)
+1.1
123456am
(1484)
-1.5

3 | 2
Atomic
Oct 21 4:31 AM
 • 3'
 • 33
p
 • 1-0
rattepelle
(1731)
+12.7
PandaFrame
(1978)
-14

3 | 2
Atomic
Oct 21 4:31 AM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1976)
+1.2
saivarunv
(1497)
-3.3

3 | 2
Atomic
Oct 21 4:30 AM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1975)
+1.2
saivarunv
(1500)
-3.4

3 | 2
Atomic
Oct 21 4:29 AM
 • 1'
 • 16
p
 • 0-1
PandaFrame
(1974)
+1.1
1ftr67
(1490)
-1.7

3 | 2
Atomic
Oct 21 3:00 AM
 • 5'
 • 43
p
 • 0-1
piotrek3210
(2142)
+4.7
PandaFrame
(1979)
-4.7

3 | 2
Atomic
Oct 21 2:57 AM
 • 3'
 • 57
p
 • 1-0
piotrek3210
(2137)
+4.9
PandaFrame
(1984)
-5

3 | 2
Atomic
Oct 21 2:55 AM
 • 3'
 • 34
p
 • 0-1
piotrek3210
(2132)
+5.2
PandaFrame
(1989)
-5.2

3 | 2
Atomic
Oct 21 2:53 AM
 • 2'
 • 39
p
 • 1-0
piotrek3210
(2127)
+5.4
PandaFrame
(1995)
-5.5

3 | 2
Atomic
Oct 21 2:51 AM
 • 2'
 • 23
p
 • 1-0
PandaFrame
(1982)
+12.1
piotrek3210
(2139)
-12

3 | 2
Atomic
Oct 21 2:46 AM
 • 5'
 • 34
p
 • 0-1
piotrek3210
(2134)
+5.3
PandaFrame
(1988)
-5.3

3 | 2
Atomic
Oct 21 2:43 AM
 • 2'
 • 23
p
 • 1-0
PandaFrame
(1987)
+0.5
BARONBILLYBOB
(1354)
-0.6

3 | 2
Atomic
Oct 21 2:42 AM
 • 1'
 • 9
p
 • 1-0
PandaFrame
(1987)
+0.5
BARONBILLYBOB
(1355)
-0.6

3 | 2
Atomic
Oct 21 2:38 AM
 • 4'
 • 15
p
 • 0-1
PandaFrame
(1985)
+1.9
olivier379
(1625)
-2.2

3 | 2
Atomic
Oct 21 2:36 AM
 • 2'
 • 12
p
 • 1-0
PandaFrame
(1974)
+10.6
laszlopencsev
(2079)
-13.4

3 | 2
Atomic
Oct 21 2:33 AM
 • 2'
 • 16
p
 • 0-1
PandaFrame
(1973)
+1.2
Garmid123
(1524)
-1.5

3 | 2
Atomic
Oct 20 3:59 PM
 • 6'
 • 27
p
 • 0-1
PandaFrame
(1966)
+7.1
AtomicExperiment
(1919)
-7.1

3 | 2
Atomic
Oct 20 3:51 PM
 • 8'
 • 54
p
 • 0-1
PandaFrame
(1961)
+4.9
nalinbenda
(1808)
-5

3 | 2
Atomic
Oct 20 3:35 PM
 • 6'
 • 47
p
 • 1-0
PandaFrame
(1949)
+11.9
bimbow
(2113)
-13

3 | 2
Atomic
Oct 20 3:34 PM
 • 1'
 • 9
p
 • 1-0
bimbow
(2107)
+5.5
PandaFrame
(1954)
-5

3 | 2
Atomic
Oct 20 3:31 PM
 • 4'
 • 34
p
 • 0-1
riantix
(2183)
+3.5
PandaFrame
(1958)
-3.7

3 | 2
Atomic
Oct 20 3:30 PM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1956)
+1.1
SuperAspen
(1480)
-3

3 | 2
Atomic
Oct 20 3:29 PM
 • 1'
 • 11
p
 • 1-0
PandaFrame
(1943)
+13.5
riantix
(2195)
-12.6

3 | 2
Atomic
Oct 20 3:29 PM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1935)
+8.3
dsoarhsh
(1935)
-9.3

3 | 2
Atomic
Oct 20 3:26 PM
 • 3'
 • 25
p
 • 1-0
PandaFrame
(1926)
+8.4
ElenadeAvalorCetrodelaLuz
(1924)
-7.9

3 | 2
Atomic
Oct 20 3:25 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1925)
+1.5
SoundBarrier300
(1500)
-4.4

3 | 2
Atomic
Oct 20 3:23 PM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1916)
+8.8
ElenadeAvalorCetrodelaLuz
(1932)
-8.4

3 | 2
Atomic
Oct 20 7:06 AM
 • 5'
 • 55
p
 • 1-0
lgamar
(1735)
+12.8
PandaFrame
(1929)
-12.8

3 | 2
Atomic
Oct 20 7:05 AM
 • 1'
 • 11
p
 • 1-0
PandaFrame
(1924)
+4.5
lgamar
(1740)
-4.5

3 | 2
Atomic
Oct 20 7:01 AM
 • 5'
 • 52
p
 • 0-1
PandaFrame
(1920)
+4.7
lgamar
(1744)
-4.7

3 | 2
Atomic
Oct 20 6:52 AM
 • 9'
 • 85
p
 • 0-1
smarty_kaps
(1966)
+7.5
PandaFrame
(1927)
-7.7

3 | 2
Atomic
Oct 20 6:52 AM
 • 1'
 • 5
p
 • 0-1
PandaFrame
(1926)
+1.5
hrithikhsivalingam
(1496)
-4.2

3 | 2
Atomic
Oct 20 6:51 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1924)
+1.5
hrithikhsivalingam
(1500)
-4.4

3 | 2
Atomic
Oct 20 6:32 AM
 • 6'
 • 39
p
 • 1-0
PandaFrame
(1916)
+7.9
satranj2828
(1888)
-8

3 | 2
Atomic
Oct 20 6:28 AM
 • 4'
 • 23
p
 • 1-0
PandaFrame
(1908)
+8.4
satranj2828
(1897)
-8.5

3 | 2
Atomic
Oct 20 6:25 AM
 • 3'
 • 15
p
 • 0-1
PandaFrame
(1899)
+8.9
Roxy_7
(1901)
-7.5

3 | 2
Atomic
Oct 20 6:19 AM
 • 7'
 • 46
p
 • 0-1
PandaFrame
(1890)
+9.3
satranj2828
(1902)
-9.1

3 | 2
Atomic
Oct 20 6:17 AM
 • 3'
 • 15
p
 • 1-0
satranj2828
(1893)
+9.1
PandaFrame
(1899)
-9.3

3 | 2
Atomic
Oct 20 6:13 AM
 • 4'
 • 29
p
 • 1-0
Kobolld_king
(1804)
+10.1
PandaFrame
(1911)
-12

3 | 2
Atomic
Oct 20 6:11 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1904)
+7
Kobolld_king
(1810)
-5.8

3 | 2
Atomic
Oct 20 6:07 AM
 • 4'
 • 42
p
 • 0-1
PandaFrame
(1897)
+7.5
Kobolld_king
(1816)
-6.1

3 | 2
Atomic
Oct 20 6:06 AM
 • 2'
 • 9
p
 • 1-0
PandaFrame
(1889)
+8
Kobolld_king
(1822)
-6.5

3 | 2
Atomic
Oct 20 5:59 AM
 • 8'
 • 64
p
 • 0-1
PandaFrame
(1880)
+8.6
Kobolld_king
(1829)
-6.9

3 | 2
Atomic
Oct 20 5:57 AM
 • 2'
 • 21
p
 • 1-0
PandaFrame
(1878)
+2.3
colinkearns
(1500)
-5.6

3 | 2
Atomic
Oct 20 5:57 AM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1875)
+2.9
a_love_easy
(1557)
-2.6

3 | 2
Atomic
Oct 20 5:54 AM
 • 3'
 • 30
p
 • 0-1
PandaFrame
(1872)
+3
a_love_easy
(1560)
-2.6

3 | 2
Atomic
Oct 20 5:52 AM
 • 3'
 • 22
p
 • 0-1
PandaFrame
(1869)
+3.2
fortnitebattlepass926
(1569)
-2.5

3 | 2
Atomic
Oct 20 5:49 AM
 • 4'
 • 25
p
 • 1-0
pulkitgo
(1636)
+23.2
PandaFrame
(1885)
-16.1

3 | 2
Atomic
Oct 20 5:48 AM
 • 1'
 • 12
p
 • 0-1
pulkitgo
(1611)
+24.9
PandaFrame
(1902)
-16.9

3 | 2
Atomic
Oct 20 5:43 AM
 • 5'
 • 23
p
 • 0-1
PandaFrame
(1900)
+1.8
membee
(1479)
-2.9

3 | 2
Atomic
Oct 20 5:41 AM
 • 2'
 • 15
p
 • 0-1
PandaFrame
(1898)
+1.9
membee
(1482)
-3

3 | 2
Atomic
Oct 20 5:39 AM
 • 3'
 • 27
p
 • 0-1
PandaFrame
(1897)
+1.5
Recespuffsrecespuffs
(1444)
-1.7

3 | 2
Atomic
Oct 20 5:37 AM
 • 2'
 • 12
p
 • 0-1
Recespuffsrecespuffs
(1422)
+21.9
PandaFrame
(1916)
-19

3 | 2
Atomic
Oct 20 5:37 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1914)
+1.4
karsonherrell
(1445)
-2.9

3 | 2
Atomic
Oct 20 5:36 AM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1913)
+1.4
karsonherrell
(1448)
-3

3 | 2
Atomic
Oct 20 5:36 AM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1911)
+1.4
karsonherrell
(1451)
-3.1

3 | 2
Atomic
Oct 20 5:03 AM
 • 2'
 • 19
p
 • 1-0
PandaFrame
(1910)
+1.6
diamonvn
(1469)
-3.7

3 | 2
Atomic
Oct 20 4:59 AM
 • 5'
 • 21
p
 • 0-1
PandaFrame
(1907)
+2.5
LordCrex
(1564)
-2.1

3 | 2
Atomic
Oct 19 4:20 PM
 • 2'
 • 11
p
 • 1-0
PandaFrame
(1905)
+2.2
FunnyMars1
(1538)
-4.3

3 | 2
Atomic
Oct 19 4:17 PM
 • 4'
 • 27
p
 • 1-0
Hardy314
(1606)
+14.7
PandaFrame
(1921)
-16.4

3 | 2
Atomic
Oct 19 4:15 PM
 • 3'
 • 20
p
 • 0-1
PandaFrame
(1919)
+2.9
Hardy314
(1609)
-2.6

3 | 2
Atomic
Oct 19 4:13 PM
 • 2'
 • 24
p
 • 0-1
Hardy314
(1594)
+14.8
PandaFrame
(1935)
-16.8

3 | 2
Atomic
Oct 19 4:13 PM
 • 1'
 • 9
p
 • 1-0
PandaFrame
(1933)
+2.5
Hardy314
(1596)
-2.2

3 | 2
Atomic
Oct 19 4:10 PM
 • 3'
 • 37
p
 • 1-0
PandaFrame
(1930)
+2.6
Hardy314
(1598)
-2.3

3 | 2
Atomic
Oct 19 4:10 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1929)
+1.7
KabobGaming
(1500)
-4.3

3 | 2
Atomic
Oct 19 4:02 PM
 • 7'
 • 68
p
 • 1-0
babaroshi
(2124)
+6.8
PandaFrame
(1933)
-4.8

3 | 2
Atomic
Oct 19 4:02 PM
 • 1'
 • 8
p
 • 0-1
FROGTM
(1556)
+40.7
PandaFrame
(1950)
-16.5

3 | 2
Atomic
Oct 19 4:01 PM
 • 1'
 • 12
p
 • 1-0
FROGTM
(1513)
+43
PandaFrame
(1967)
-16.8

3 | 2
Atomic
Oct 19 4:00 PM
 • 1'
 • 11
p
 • 1-0
PandaFrame
(1965)
+1.5
FROGTM
(1516)
-3.5

3 | 2
Atomic
Oct 19 3:56 PM
 • 4'
 • 29
p
 • 1-0
PandaFrame
(1964)
+1.5
FROGTM
(1520)
-3.7

3 | 2
Atomic
Oct 19 3:55 PM
 • 2'
 • 14
p
 • 0-1
PandaFrame
(1963)
+1.3
saulsot5824
(1487)
-3.2

3 | 2
Atomic
Oct 19 3:53 PM
 • 2'
 • 16
p
 • 0-1
PandaFrame
(1962)
+1.1
loodyx2
(1464)
-1.6

3 | 2
Atomic
Oct 19 3:50 PM
 • 3'
 • 29
p
 • 1-0
PandaFrame
(1949)
+12.9
IHaveTheSauce
(2122)
-16.9

3 | 2
Atomic
Oct 19 3:50 PM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1947)
+1.2
TheRealLil_Curry
(1469)
-2.9

3 | 2
Atomic
Oct 19 3:46 PM
 • 3'
 • 30
p
 • 0-1
PandaFrame
(1946)
+1.4
NDuyHung
(1500)
-4

3 | 2
Atomic
Oct 19 1:48 PM
 • 4'
 • 46
p
 • 0-1
PandaFrame
(1941)
+4.8
Presto69
(1768)
-4.5

3 | 2
Atomic
Oct 19 1:43 PM
 • 5'
 • 36
p
 • 1-0
PandaFrame
(1936)
+5.1
Presto69
(1773)
-4.7

3 | 2
Atomic
Oct 19 1:40 PM
 • 3'
 • 28
p
 • 0-1
Presto69
(1761)
+12.3
PandaFrame
(1949)
-13.3

3 | 2
Atomic
Oct 19 1:40 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1948)
+1.2
samuelhadrich
(1469)
-2.8

3 | 2
Atomic
Oct 19 1:39 PM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1945)
+3.6
LunaRocks
(1704)
-3.3

3 | 2
Atomic
Oct 19 1:32 PM
 • 7'
 • 43
p
 • 1-0
am_i_unique
(2150)
+3.8
PandaFrame
(1949)
-4.3

3 | 2
Atomic
Oct 19 1:29 PM
 • 4'
 • 29
p
 • 1-0
PandaFrame
(1935)
+14
am_i_unique
(2162)
-12

3 | 2
Atomic
Oct 19 1:23 PM
 • 6'
 • 83
p
 • 1-0
am_i_unique
(2159)
+3.5
PandaFrame
(1939)
-4

3 | 2
Atomic
Oct 19 1:15 PM
 • 8'
 • 52
p
 • 0-1
am_i_unique
(2155)
+3.6
PandaFrame
(1943)
-4.2

3 | 2
Atomic
Oct 19 1:12 PM
 • 4'
 • 45
p
 • 0-1
PandaFrame
(1942)
+1.5
cucumbercount
(1512)
-1.8

3 | 2
Atomic
Oct 19 1:10 PM
 • 3'
 • 25
p
 • 1-0
PandaFrame
(1940)
+1.7
braedendoose
(1540)
-1.9

3 | 2
Atomic
Oct 19 1:09 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1939)
+1.3
hgfddsertyy
(1479)
-3.4

3 | 2
Atomic
Oct 19 1:06 PM
 • 3'
 • 26
p
 • 1-0
DoktorLivesey
(2167)
+6.1
PandaFrame
(1942)
-3.9

3 | 2
Atomic
Oct 19 1:04 PM
 • 2'
 • 19
p
 • 1-0
Aydrias
(1838)
+12.2
PandaFrame
(1954)
-11.5

3 | 2
Atomic
Oct 19 1:02 PM
 • 3'
 • 35
p
 • 1-0
PandaFrame
(1950)
+4.4
ultimate_skill_issue
(1750)
-3.9

3 | 2
Atomic
Oct 19 1:00 PM
 • 2'
 • 14
p
 • 0-1
PandaFrame
(1948)
+1.4
GloriouslyDim
(1500)
-3.9

3 | 2
Atomic
Oct 19 12:58 PM
 • 2'
 • 30
p
 • 0-1
PandaFrame
(1944)
+4.5
ultimate_skill_issue
(1752)
-4

3 | 2
Atomic
Oct 19 12:55 PM
 • 3'
 • 44
p
 • 0-1
PandaFrame
(1939)
+4.7
ultimate_skill_issue
(1757)
-4.1

3 | 2
Atomic
Oct 19 12:54 PM
 • 2'
 • 20
p
 • 0-1
PandaFrame
(1938)
+1.1
zealramsay
(1449)
-2.7

3 | 2
Atomic
Oct 19 12:54 PM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1937)
+1.1
zealramsay
(1451)
-2.7

3 | 2
Atomic
Oct 19 12:53 PM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1936)
+1.1
zealramsay
(1454)
-2.8

3 | 2
Atomic
Oct 19 12:50 PM
 • 3'
 • 25
p
 • 1-0
PandaFrame
(1933)
+3
Jopa12chess
(1659)
-4.4

3 | 2
Atomic
Oct 19 12:48 PM
 • 3'
 • 16
p
 • 1-0
Tiedyetiger
(1728)
+12.3
PandaFrame
(1946)
-13.3

3 | 2
Atomic
Oct 19 12:45 PM
 • 3'
 • 29
p
 • 1-0
PandaFrame
(1944)
+2.4
McGengar
(1620)
-2.5

3 | 2
Atomic
Oct 19 12:44 PM
 • 2'
 • 17
p
 • 1-0
PandaFrame
(1941)
+2.4
McGengar
(1622)
-2.5

3 | 2
Atomic
Oct 19 12:40 PM
 • 4'
 • 24
p
 • 0-1
PandaFrame
(1939)
+2.5
McGengar
(1625)
-2.6

3 | 2
Atomic
Oct 19 9:51 AM
 • 3'
 • 27
p
 • 1-0
PandaFrame
(1937)
+1.3
rafaelamendoim
(1493)
-1.4

3 | 2
Atomic
Oct 19 9:50 AM
 • 1'
 • 12
p
 • 0-1
PandaFrame
(1936)
+1.3
rafaelamendoim
(1495)
-1.4

3 | 2
Atomic
Oct 19 9:44 AM
 • 2'
 • 13
p
 • 1-0
PandaFrame
(1935)
+1.4
XSHIELDX
(1500)
-4.2

3 | 2
Atomic
Oct 19 8:58 AM
 • 4'
 • 50
p
 • 0-1
thistest016
(2036)
+7.6
PandaFrame
(1941)
-5.9

3 | 2
Atomic
Oct 19 8:55 AM
 • 3'
 • 22
p
 • 0-1
PandaFrame
(1930)
+10.7
thistest016
(2050)
-13.9

3 | 2
Atomic
Oct 19 8:55 AM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1919)
+11.3
thistest016
(2065)
-14.9

3 | 2
Atomic
Oct 19 8:46 AM
 • 9'
 • 93
p
 • 1-0
thistest016
(2058)
+7
PandaFrame
(1924)
-5.3

3 | 2
Atomic
Oct 19 8:42 AM
 • 5'
 • 34
p
 • 0-1
thistest016
(2050)
+7.5
PandaFrame
(1929)
-5.6

3 | 2
Atomic
Oct 19 8:35 AM
 • 7'
 • 52
p
 • 0-1
duken72
(2134)
+4.2
PandaFrame
(1933)
-4.1

3 | 2
Atomic
Oct 19 8:29 AM
 • 6'
 • 39
p
 • 1-0
duken72
(2130)
+4.3
PandaFrame
(1938)
-4.2

3 | 2
Atomic
Oct 19 8:25 AM
 • 4'
 • 24
p
 • 0-1
PandaFrame
(1925)
+12.7
IHaveTheSauce
(2136)
-18.4

3 | 2
Atomic
Oct 19 8:25 AM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1912)
+13
KINGPavelDatsyuk
(2139)
-19.4

3 | 2
Atomic
Oct 19 8:24 AM
 • 1'
 • 13
p
 • 1-0
PandaFrame
(1898)
+13.5
KINGPavelDatsyuk
(2159)
-20.6

3 | 2
Atomic
Oct 19 8:23 AM
 • 1'
 • 8
p
 • 1-0
KINGPavelDatsyuk
(2154)
+5
PandaFrame
(1902)
-3.3

3 | 2
Atomic
Oct 18 1:00 PM
 • 2'
 • 17
p
 • 1-0
PandaFrame
(1896)
+5.8
kingcobrax03
(1780)
-5.5

3 | 2
Atomic
Oct 18 12:59 PM
 • 2'
 • 12
p
 • 0-1
PandaFrame
(1890)
+6.1
kingcobrax03
(1786)
-5.8

3 | 2
Atomic
Oct 18 12:52 PM
 • 7'
 • 47
p
 • 0-1
PandaFrame
(1884)
+5.8
PringiRene
(1767)
-5.8

3 | 2
Atomic
Oct 18 12:50 PM
 • 3'
 • 14
p
 • 1-0
PandaFrame
(1878)
+6.2
PringiRene
(1773)
-6.2

3 | 2
Atomic
Oct 18 12:45 PM
 • 6'
 • 36
p
 • 0-1
PandaFrame
(1871)
+6.5
PringiRene
(1779)
-6.5

3 | 2
Atomic
Oct 18 12:36 PM
 • 9'
 • 74
p
 • 0-1
PringiRene
(1768)
+11.6
PandaFrame
(1883)
-11.6

3 | 2
Atomic
Oct 18 12:30 PM
 • 7'
 • 53
p
 • 1-0
PringiRene
(1756)
+12.3
PandaFrame
(1895)
-12.3

3 | 2
Atomic
Oct 18 12:23 PM
 • 7'
 • 48
p
 • 1-0
PandaFrame
(1889)
+5.9
PringiRene
(1762)
-5.9

3 | 2
Atomic
Oct 18 12:18 PM
 • 5'
 • 51
p
 • ½-½
ari222222222
(1832)
+1.4
PandaFrame
(1891)
-1.5

3 | 2
Atomic
Oct 18 12:17 PM
 • 1'
 • 20
p
 • 0-1
PandaFrame
(1889)
+2
pardito22
(1500)
-5.3

3 | 2
Atomic
Oct 18 12:15 PM
 • 2'
 • 23
p
 • 0-1
PandaFrame
(1888)
+1.1
Toopnado
(1393)
-1.6

3 | 2
Atomic
Oct 18 12:14 PM
 • 2'
 • 14
p
 • 0-1
PandaFrame
(1887)
+1.1
Toopnado
(1394)
-1.7

3 | 2
Atomic
Oct 18 12:13 PM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1886)
+1.1
Toopnado
(1396)
-1.7

3 | 2
Atomic
Oct 18 12:09 PM
 • 4'
 • 41
p
 • 1-0
ant_arctic
(1961)
+7.1
PandaFrame
(1893)
-7.2

3 | 2
Atomic
Oct 18 12:08 PM
 • 1'
 • 13
p
 • 0-1
PandaFrame
(1887)
+5.4
cahsevert
(1734)
-4.8

3 | 2
Atomic
Oct 18 12:06 PM
 • 2'
 • 16
p
 • 1-0
PandaFrame
(1882)
+5.6
cahsevert
(1740)
-5

3 | 2
Atomic
Oct 18 12:06 PM
 • 1'
 • 10
p
 • 1-0
cahsevert
(1728)
+11.7
PandaFrame
(1895)
-13.3

3 | 2
Atomic
Oct 18 12:05 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1893)
+2.1
toastedtoass
(1525)
-3.2

3 | 2
Atomic
Oct 18 12:04 PM
 • 1'
 • 12
p
 • 0-1
TheYeyus
(2094)
+6.1
PandaFrame
(1897)
-4.6

3 | 2
Atomic
Oct 18 9:50 AM
 • 2'
 • 16
p
 • 0-1
Chrislstein
(1591)
+15.7
PandaFrame
(1913)
-16

3 | 2
Atomic
Oct 18 9:48 AM
 • 2'
 • 23
p
 • 1-0
PandaFrame
(1912)
+1.1
puzzledtune
(1415)
-1.8

3 | 2
Atomic
Oct 18 9:48 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1911)
+1.7
phelanmcardle
(1500)
-4.7

3 | 2
Atomic
Oct 18 9:45 AM
 • 3'
 • 25
p
 • 1-0
PandaFrame
(1907)
+3.8
Turicagamer
(1669)
-3.4

3 | 2
Atomic
Oct 18 9:43 AM
 • 3'
 • 27
p
 • 0-1
PandaFrame
(1903)
+3.9
Turicagamer
(1673)
-3.5

3 | 2
Atomic
Oct 18 9:40 AM
 • 3'
 • 29
p
 • 1-0
NiftyMustang
(1520)
+18.6
PandaFrame
(1919)
-16.5

3 | 2
Atomic
Oct 18 9:38 AM
 • 2'
 • 6
p
 • 1-0
PandaFrame
(1918)
+1.7
Aislenevertell
(1513)
-2

3 | 2
Atomic
Oct 18 9:38 AM
 • 1'
 • 4
p
 • 1-0
PandaFrame
(1916)
+1.7
Aislenevertell
(1515)
-2

3 | 2
Atomic
Oct 18 9:38 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1915)
+1.5
PiccoloKasparov
(1486)
-3

3 | 2
Atomic
Oct 18 9:37 AM
 • 1'
 • 13
p
 • 1-0
PandaFrame
(1913)
+1.6
carlosdosmarcos
(1500)
-4.7

3 | 2
Atomic
Oct 18 8:37 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1911)
+1.4
QwertRudanas
(1475)
-3.8

3 | 2
Atomic
Oct 18 8:30 AM
 • 5'
 • 28
p
 • 1-0
PandaFrame
(1898)
+13.6
duken72
(2137)
-14.5

3 | 2
Atomic
Oct 18 8:30 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1895)
+2.8
CoreyF234A
(1602)
-4

3 | 2
Atomic
Oct 18 8:28 AM
 • 2'
 • 21
p
 • 1-0
duken72
(2133)
+3.9
PandaFrame
(1899)
-3.6

3 | 2
Atomic
Oct 18 8:21 AM
 • 7'
 • 58
p
 • 0-1
Tommaso_pl
(1945)
+8.7
PandaFrame
(1906)
-7.7

3 | 2
Atomic
Oct 18 8:20 AM
 • 2'
 • 11
p
 • 1-0
PandaFrame
(1904)
+2.3
Amongsusinalization
(1570)
-2.2

3 | 2
Atomic
Oct 18 8:15 AM
 • 5'
 • 21
p
 • 0-1
PandaFrame
(1894)
+10
Tommaso_pl
(1952)
-11.4

3 | 2
Atomic
Oct 18 8:15 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1893)
+1.2
AnusHole4002
(1432)
-1.9

3 | 2
Atomic
Oct 18 8:15 AM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1891)
+1.2
AnusHole4002
(1434)
-2

3 | 2
Atomic
Oct 18 8:12 AM
 • 3'
 • 19
p
 • 1-0
PandaFrame
(1889)
+2.6
fredchen36
(1581)
-5.7

3 | 2
Atomic
Oct 18 8:11 AM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1887)
+1.8
NKH2017
(1500)
-5.3

3 | 2
Atomic
Oct 18 8:09 AM
 • 2'
 • 21
p
 • 1-0
eeeeeeeeeeeeeeeeee475
(1852)
+10
PandaFrame
(1896)
-9.4

3 | 2
Atomic
Oct 18 8:09 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1895)
+1.8
billbobjoe45
(1511)
-3.5

3 | 2
Atomic
Oct 18 8:08 AM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1893)
+1.8
billbobjoe45
(1514)
-3.7

3 | 2
Atomic
Oct 18 8:06 AM
 • 3'
 • 31
p
 • 1-0
Mundepza
(1479)
+44
PandaFrame
(1907)
-14.6

3 | 2
Atomic
Oct 18 8:01 AM
 • 5'
 • 78
p
 • 0-1
Moshefrier
(1929)
+8.6
PandaFrame
(1915)
-7.9

3 | 2
Atomic
Oct 18 3:40 AM
 • 2'
 • 24
p
 • 0-1
PandaFrame
(1905)
+10
thanosbishop
(1982)
-12.3

3 | 2
Atomic
Oct 18 3:39 AM
 • 1'
 • 14
p
 • 1-0
PandaFrame
(1895)
+10.6
thanosbishop
(1995)
-13.2

3 | 2
Atomic
Oct 18 3:38 AM
 • 2'
 • 26
p
 • 0-1
PandaFrame
(1893)
+1.7
1mperator_Trajan
(1502)
-1.7

3 | 2
Atomic
Oct 18 3:36 AM
 • 3'
 • 32
p
 • 0-1
PandaFrame
(1891)
+1.7
1mperator_Trajan
(1504)
-1.7

3 | 2
Atomic
Oct 18 3:33 AM
 • 3'
 • 28
p
 • 0-1
PandaFrame
(1882)
+9.2
JeanSIsii
(1924)
-10.6

3 | 2
Atomic
Oct 18 3:33 AM
 • 1'
 • 9
p
 • 1-0
PandaFrame
(1881)
+1.6
ddeadpool_98
(1469)
-4

3 | 2
Atomic
Oct 18 3:30 AM
 • 4'
 • 29
p
 • 1-0
PandaFrame
(1876)
+4.4
djchet
(1698)
-4.2

3 | 2
Atomic
Oct 18 3:29 AM
 • 1'
 • 13
p
 • 1-0
PandaFrame
(1871)
+4.6
djchet
(1703)
-4.4

3 | 2
Atomic
Oct 18 3:20 AM
 • 8'
 • 126
p
 • 0-1
satranj2828
(1864)
+9.1
PandaFrame
(1880)
-8.7

3 | 2
Atomic
Oct 18 3:19 AM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1878)
+1.8
G0dly3
(1489)
-4.9

3 | 2
Atomic
Oct 18 3:19 AM
 • 1'
 • 9
p
 • 1-0
PandaFrame
(1877)
+1.8
G0dly3
(1494)
-5.3

3 | 2
Atomic
Oct 18 3:17 AM
 • 2'
 • 19
p
 • 1-0
PandaFrame
(1875)
+1.9
G0dly3
(1500)
-5.6

3 | 2
Atomic
Oct 18 3:16 AM
 • 1'
 • 8
p
 • 1-0
Theosapiens
(1849)
+9.1
PandaFrame
(1884)
-9

3 | 2
Atomic
Oct 18 3:14 AM
 • 2'
 • 34
p
 • 0-1
PandaFrame
(1879)
+4.6
nadavation
(1708)
-4.5

3 | 2
Atomic
Oct 18 3:12 AM
 • 2'
 • 19
p
 • 1-0
PandaFrame
(1874)
+4.8
nadavation
(1713)
-4.7

3 | 2
Atomic
Oct 18 3:11 AM
 • 2'
 • 19
p
 • 1-0
nadavation
(1700)
+12.2
PandaFrame
(1887)
-12.3

3 | 2
Atomic
Oct 18 3:05 AM
 • 6'
 • 34
p
 • 1-0
PandaFrame
(1874)
+13
duken72
(2097)
-14.1

3 | 2
Atomic
Oct 18 3:04 AM
 • 2'
 • 14
p
 • 1-0
duken72
(2093)
+4.2
PandaFrame
(1878)
-3.8

3 | 2
Atomic
Oct 18 2:56 AM
 • 7'
 • 87
p
 • 1-0
PandaFrame
(1871)
+7.1
jetjelly
(1815)
-7.3

3 | 2
Atomic
Oct 18 2:56 AM
 • 1'
 • 12
p
 • 0-1
PandaFrame
(1869)
+2
madangdinh
(1500)
-5.8

3 | 2
Atomic
Oct 18 2:54 AM
 • 2'
 • 23
p
 • 1-0
PandaFrame
(1866)
+2.2
Leoski35
(1529)
-2.6

3 | 2
Atomic
Oct 18 2:52 AM
 • 2'
 • 18
p
 • 0-1
PandaFrame
(1864)
+2.2
Leoski35
(1531)
-2.7

3 | 2
Atomic
Oct 18 2:52 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1862)
+2
n0_0b93
(1500)
-6

3 | 2
Atomic
Oct 18 2:47 AM
 • 5'
 • 30
p
 • 0-1
Mstake5
(2094)
+4.8
PandaFrame
(1866)
-3.5

3 | 2
Atomic
Oct 17 4:15 PM
 • 4'
 • 33
p
 • 1-0
Martinator555
(2027)
+4.3
PandaFrame
(1871)
-4.8

3 | 2
Atomic
Oct 17 4:09 PM
 • 7'
 • 42
p
 • 0-1
Martinator555
(2022)
+4.5
PandaFrame
(1876)
-5

3 | 2
Atomic
Oct 17 4:06 PM
 • 3'
 • 19
p
 • 1-0
Martinator555
(2017)
+4.7
PandaFrame
(1881)
-5.2

3 | 2
Atomic
Oct 17 4:02 PM
 • 4'
 • 25
p
 • 1-0
PandaFrame
(1870)
+11.8
Martinator555
(2028)
-10.4

3 | 2
Atomic
Oct 17 3:54 PM
 • 8'
 • 57
p
 • 0-1
PandaFrame
(1857)
+12.3
Martinator555
(2039)
-10.8

3 | 2
Atomic
Oct 17 3:50 PM
 • 4'
 • 28
p
 • 0-1
Martinator555
(2035)
+4
PandaFrame
(1862)
-4.6

3 | 2
Atomic
Oct 17 3:45 PM
 • 5'
 • 51
p
 • 1-0
Martinator555
(2030)
+4.2
PandaFrame
(1867)
-4.8

3 | 2
Atomic
Oct 17 3:42 PM
 • 3'
 • 22
p
 • 0-1
Martinator555
(2026)
+4.3
PandaFrame
(1872)
-5

3 | 2
Atomic
Oct 17 3:42 PM
 • 1'
 • 9
p
 • 1-0
Martinator555
(2022)
+4.5
PandaFrame
(1877)
-5.2

3 | 2
Atomic
Oct 17 3:37 PM
 • 5'
 • 42
p
 • 0-1
Martinator555
(2017)
+4.6
PandaFrame
(1882)
-5.5

3 | 2
Atomic
Oct 17 3:36 PM
 • 2'
 • 13
p
 • 1-0
Martinator555
(2012)
+4.8
PandaFrame
(1888)
-5.7

3 | 2
Atomic
Oct 17 3:33 PM
 • 4'
 • 27
p
 • 0-1
Martinator555
(2007)
+5
PandaFrame
(1894)
-6

3 | 2
Atomic
Oct 17 3:28 PM
 • 5'
 • 33
p
 • 1-0
Martinator555
(2002)
+5.2
PandaFrame
(1901)
-6.4

3 | 2
Atomic
Oct 17 2:55 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1899)
+1.7
Yashp890
(1486)
-4.3

3 | 2
Atomic
Oct 17 2:51 PM
 • 4'
 • 35
p
 • 1-0
TurtleRegimentFour
(1630)
+14.6
PandaFrame
(1914)
-14.7

3 | 2
Atomic
Oct 17 2:50 PM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1911)
+3.1
TurtleRegimentFour
(1633)
-3

3 | 2
Atomic
Oct 17 2:19 PM
 • 3'
 • 37
p
 • 1-0
PandaFrame
(1909)
+2
Aristologychesschess
(1540)
-2

3 | 2
Atomic
Oct 17 2:13 PM
 • 6'
 • 44
p
 • 0-1
PandaFrame
(1903)
+5.8
smule44
(1778)
-5.9

3 | 2
Atomic
Oct 17 2:07 PM
 • 1'
 • 12
p
 • 1-0
PandaFrame
(1895)
+7.4
RtxVTS
(1839)
-7.3

3 | 2
Atomic
Oct 17 2:05 PM
 • 2'
 • 13
p
 • 1-0
PandaFrame
(1884)
+10.9
menderus
(1963)
-10.2

3 | 2
Atomic
Oct 17 2:04 PM
 • 1'
 • 12
p
 • 0-1
PandaFrame
(1883)
+1.7
M00200
(1471)
-3

3 | 2
Atomic
Oct 17 2:03 PM
 • 1'
 • 9
p
 • 1-0
PandaFrame
(1881)
+1.7
M00200
(1474)
-3.1

3 | 2
Atomic
Oct 17 1:09 PM
 • 6'
 • 37
p
 • 1-0
ant_arctic
(1945)
+7.3
PandaFrame
(1889)
-7.5

3 | 2
Atomic
Oct 17 1:09 PM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1887)
+1.9
accordingtomeek
(1500)
-5.3

3 | 2
Atomic
Oct 17 1:04 PM
 • 5'
 • 32
p
 • 0-1
PandaFrame
(1881)
+6.1
dobinson
(1761)
-5.2

3 | 2
Atomic
Oct 17 1:01 PM
 • 4'
 • 30
p
 • 0-1
PandaFrame
(1874)
+6.4
dobinson
(1767)
-5.5

3 | 2
Atomic
Oct 17 12:59 PM
 • 2'
 • 18
p
 • 0-1
dobinson
(1756)
+10.5
PandaFrame
(1887)
-12.5

3 | 2
Atomic
Oct 17 12:53 PM
 • 6'
 • 53
p
 • 0-1
PandaFrame
(1885)
+1.5
anders4567
(1450)
-1.6

5 min
Atomic
Oct 17 12:52 PM
 • 2'
 • 18
p
 • 0-1
PandaFrame
(1884)
+1.6
cadenbrady
(1451)
-3.6

5 min
Atomic
Oct 17 12:51 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1882)
+1.6
cadenbrady
(1455)
-3.8

5 min
Atomic
Oct 17 12:51 PM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1880)
+1.6
cadenbrady
(1459)
-4

3 | 2
Atomic
Oct 17 12:46 PM
 • 6'
 • 68
p
 • 0-1
Mstake5
(2091)
+5.6
PandaFrame
(1885)
-4.3

3 | 2
Atomic
Oct 17 12:44 PM
 • 2'
 • 17
p
 • 1-0
PandaFrame
(1879)
+6.1
Iplaythings
(1759)
-5.6

3 | 2
Atomic
Oct 17 12:43 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1877)
+1.8
Kev-one
(1476)
-4.5

3 | 2
Atomic
Oct 17 12:43 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1875)
+2.1
SilVoll
(1510)
-5.1

3 | 2
Atomic
Oct 17 12:42 PM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1872)
+2.2
SilVoll
(1516)
-5.5

3 | 2
Atomic
Oct 17 12:36 PM
 • 7'
 • 61
p
 • 1-0
PandaFrame
(1866)
+6.9
Secret411
(1782)
-7.3

3 | 2
Atomic
Oct 17 12:29 PM
 • 7'
 • 98
p
 • 1-0
Secret411
(1769)
+12.5
PandaFrame
(1877)
-11.7

3 | 2
Atomic
Oct 17 12:29 PM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1875)
+1.9
estringisg
(1483)
-3.2

3 | 2
Atomic
Oct 17 12:28 PM
 • 1'
 • 13
p
 • 1-0
PandaFrame
(1873)
+2.1
cameron_ohashi
(1500)
-5.7

3 | 2
Atomic
Oct 17 12:26 PM
 • 2'
 • 19
p
 • 1-0
PandaFrame
(1872)
+1.6
sosodo
(1457)
-3.4

3 | 2
Explosive Fight
Oct 17 9:01 AM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1870)
+2.1
NamCua123
(1500)
-5.8

3 | 2
Atomic
Oct 17 8:54 AM
 • 7'
 • 92
p
 • 0-1
GMwishfulthinking
(1945)
+7.8
PandaFrame
(1877)
-7.2

3 | 2
Atomic
Oct 17 8:53 AM
 • 2'
 • 9
p
 • 1-0
GMwishfulthinking
(1936)
+8.4
PandaFrame
(1884)
-7.7

3 | 2
Atomic
Oct 17 8:49 AM
 • 4'
 • 49
p
 • 1-0
PandaFrame
(1873)
+11
GMwishfulthinking
(1948)
-12.1

3 | 2
Atomic
Oct 17 8:46 AM
 • 3'
 • 25
p
 • 1-0
PandaFrame
(1868)
+5
JmAbuDabi
(1692)
-4.3

3 | 2
Explosive Fight
Oct 17 8:42 AM
 • 3'
 • 33
p
 • 1-0
PandaFrame
(1864)
+4.9
MDTS
(1677)
-4.4

5 min
Atomic
Oct 17 8:40 AM
 • 2'
 • 24
p
 • 0-1
PandaFrame
(1862)
+2
dijendrakalita
(1471)
-4.7

5 min
Atomic
Oct 17 8:40 AM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1860)
+2
dijendrakalita
(1476)
-5

3 | 2
Atomic
Oct 17 8:35 AM
 • 5'
 • 29
p
 • 0-1
PandaFrame
(1854)
+6
hermenejil
(1718)
-5.3

3 | 2
Atomic
Oct 17 8:32 AM
 • 4'
 • 50
p
 • 0-1
GMwishfulthinking
(1915)
+8.2
PandaFrame
(1862)
-8.1

3 | 2
Atomic
Oct 17 8:29 AM
 • 2'
 • 22
p
 • 0-1
am_i_unique
(2108)
+3.1
PandaFrame
(1866)
-3.9

3 | 2
Atomic
Oct 17 8:28 AM
 • 1'
 • 24
p
 • 0-1
am_i_unique
(2105)
+3.2
PandaFrame
(1870)
-4.1

3 | 2
Atomic
Oct 17 8:26 AM
 • 2'
 • 21
p
 • 1-0
Fremdermister
(1597)
+13.2
PandaFrame
(1886)
-16.4

3 | 2
Atomic
Oct 17 8:20 AM
 • 7'
 • 77
p
 • 1-0
PandaFrame
(1883)
+3.3
Fremdermister
(1600)
-2.7

3 | 2
Atomic
Oct 17 8:19 AM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1881)
+2.2
bowieulinski
(1500)
-5.5

3 | 2
Atomic
Oct 17 8:18 AM
 • 1'
 • 14
p
 • 0-1
PandaFrame
(1879)
+1.9
Anonymous6660
(1475)
-3.6

3 | 2
Atomic
Oct 17 8:16 AM
 • 2'
 • 23
p
 • 1-0
Ammaryassir
(1520)
+18.3
PandaFrame
(1896)
-17.3

3 | 2
Atomic
Oct 17 8:14 AM
 • 3'
 • 28
p
 • 0-1
PandaFrame
(1894)
+2.1
Ammaryassir
(1523)
-2.3

3 | 2
Atomic
Oct 17 8:13 AM
 • 1'
 • 13
p
 • 1-0
PandaFrame
(1892)
+1.8
VillaVoltage
(1484)
-2.1

3 | 2
Atomic
Oct 17 8:12 AM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1891)
+1.6
ELECTRO255
(1454)
-3.5

3 | 2
Atomic
Oct 17 8:09 AM
 • 4'
 • 33
p
 • 0-1
PandaFrame
(1889)
+1.5
Hitman472137
(1447)
-1.3

3 | 2
Atomic
Oct 17 8:08 AM
 • 1'
 • 12
p
 • 0-1
PandaFrame
(1887)
+2
simon9179
(1500)
-5.3

3 | 2
Atomic
Oct 17 8:07 AM
 • 1'
 • 15
p
 • 0-1
PandaFrame
(1885)
+1.8
nnnngjchugh
(1484)
-4.6

3 | 2
Explosive Fight
Oct 17 8:05 AM
 • 1'
 • 14
p
 • 0-1
PandaFrame
(1884)
+1.3
schicksall
(1431)
-1.2

3 | 2
Explosive Fight
Oct 17 8:03 AM
 • 2'
 • 26
p
 • 0-1
PandaFrame
(1881)
+3.1
hot3l_trivago
(1599)
-2.6

3 | 2
Explosive Fight
Oct 17 8:02 AM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1879)
+1.8
Darkmatterarise
(1476)
-4.5

3 | 2
Atomic
Oct 17 8:01 AM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1877)
+1.8
Ma-Tg
(1474)
-4.5

3 | 2
Atomic
Oct 17 6:49 AM
 • 5'
 • 31
p
 • 1-0
baw4ux
(1926)
+7.8
PandaFrame
(1885)
-8

3 | 2
Atomic
Oct 17 6:47 AM
 • 2'
 • 22
p
 • 1-0
PandaFrame
(1875)
+10.7
baw4ux
(1936)
-10.5

3 | 2
Atomic
Oct 17 6:47 AM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1873)
+1.9
MateoM818
(1484)
-4.1

3 | 2
Atomic
Oct 17 6:45 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1867)
+6
Midgardsormur
(1738)
-6.3

3 | 2
Atomic
Oct 17 6:39 AM
 • 6'
 • 46
p
 • 0-1
PandaFrame
(1864)
+2.9
Vaibhav_Chourasia
(1561)
-3.5

3 | 2
Atomic
Oct 17 6:37 AM
 • 3'
 • 20
p
 • 0-1
PandaFrame
(1861)
+3
Vaibhav_Chourasia
(1564)
-3.7

3 | 2
Atomic
Oct 17 6:34 AM
 • 3'
 • 20
p
 • 0-1
PandaFrame
(1858)
+3.1
Vaibhav_Chourasia
(1568)
-3.8

3 | 2
Atomic
Oct 17 6:31 AM
 • 3'
 • 18
p
 • 0-1
PandaFrame
(1855)
+2.4
aurniox
(1517)
-3.5

3 | 2
Atomic
Oct 17 6:30 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1853)
+1.8
efiremach5
(1445)
-3.8

3 | 2
Atomic
Oct 17 6:27 AM
 • 3'
 • 24
p
 • 0-1
PandaFrame
(1851)
+2.8
ahn20009
(1548)
-3

3 | 2
Atomic
Oct 17 6:25 AM
 • 3'
 • 17
p
 • 1-0
PandaFrame
(1848)
+2.9
ahn20009
(1551)
-3

3 | 2
Atomic
Oct 17 6:23 AM
 • 2'
 • 17
p
 • 1-0
PandaFrame
(1845)
+2.4
andrewcheung123
(1504)
-3.9

3 | 2
Atomic
Oct 17 6:23 AM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1836)
+8.9
lupuplayz
(1825)
-8

3 | 2
Atomic
Oct 17 6:21 AM
 • 2'
 • 28
p
 • 0-1
lupuplayz
(1816)
+9
PandaFrame
(1847)
-10.1

3 | 2
Atomic
Oct 17 6:20 AM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1845)
+1.7
kelver_alfonso
(1429)
-3.6

3 | 2
Atomic
Oct 17 6:19 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1842)
+2.4
ShadowTrident
(1498)
-4

3 | 2
Atomic
Oct 17 6:18 AM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1840)
+2.5
ShadowTrident
(1502)
-4.2

3 | 2
Atomic
Oct 17 6:18 AM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1837)
+2.5
ShadowTrident
(1506)
-4.4

3 | 2
Atomic
Oct 17 6:12 AM
 • 7'
 • 50
p
 • 0-1
PandaFrame
(1831)
+6
ekevu69
(1699)
-5.2

3 | 2
Atomic
Oct 17 6:09 AM
 • 3'
 • 18
p
 • 1-0
PringiRene
(1646)
+18.1
PandaFrame
(1846)
-14.1

3 | 2
Atomic
Oct 17 6:09 AM
 • 1'
 • 6
p
 • 1-0
PringiRene
(1626)
+19.3
PandaFrame
(1860)
-14.8

3 | 2
Atomic
Oct 17 6:03 AM
 • 6'
 • 43
p
 • 1-0
PringiRene
(1606)
+20.5
PandaFrame
(1876)
-15.5

3 | 2
Atomic
Oct 17 6:01 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1872)
+3.6
PringiRene
(1611)
-4.7

3 | 2
Atomic
Oct 17 6:01 AM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1870)
+2.8
cloaked_schemer_6
(1553)
-2.3

3 | 2
Atomic
Oct 17 4:10 AM
 • 2'
 • 31
p
 • 1-0
PandaFrame
(1868)
+1.8
valentine1999
(1458)
-3.2

3 | 2
Atomic
Oct 17 4:07 AM
 • 4'
 • 53
p
 • 1-0
PandaFrame
(1866)
+1.8
valentine1999
(1462)
-3.4

3 | 2
Atomic
Oct 17 4:06 AM
 • 1'
 • 14
p
 • 1-0
PandaFrame
(1864)
+2.3
Cookie_Cookie_Puppy
(1500)
-6

3 | 2
Atomic
Oct 17 4:05 AM
 • 1'
 • 16
p
 • 0-1
PandaFrame
(1861)
+2.7
claudiuantal
(1537)
-3.8

3 | 2
Atomic
Oct 17 4:05 AM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1860)
+1.5
GODZERO12
(1416)
-2.2

3 | 2
Atomic
Oct 17 4:04 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1858)
+1.5
GODZERO12
(1418)
-2.3

3 | 2
Atomic
Oct 17 4:04 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1857)
+1.5
GODZERO12
(1420)
-2.4

3 | 2
Atomic
Oct 17 4:01 AM
 • 3'
 • 64
p
 • 0-1
PandaFrame
(1855)
+1.5
GODZERO12
(1423)
-2.4

3 | 2
Atomic
Oct 17 4:01 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1854)
+1.5
GODZERO12
(1425)
-2.5

3 | 2
Atomic
Oct 17 4:00 AM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1852)
+1.5
GODZERO12
(1428)
-2.5

3 | 2
Atomic
Oct 17 3:59 AM
 • 2'
 • 18
p
 • 0-1
PandaFrame
(1850)
+1.6
GODZERO12
(1430)
-2.6

3 | 2
Atomic
Oct 17 3:59 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1847)
+3.2
cheetothehoo
(1583)
-6.6

3 | 2
Atomic
Oct 17 3:58 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1846)
+1.5
GODZERO12
(1418)
-2.7

3 | 2
Atomic
Oct 17 3:57 AM
 • 2'
 • 20
p
 • 0-1
PandaFrame
(1842)
+3.7
ScarmSearch
(1609)
-3.6

3 | 2
Atomic
Oct 17 3:55 AM
 • 2'
 • 26
p
 • 0-1
PandaFrame
(1838)
+3.8
ScarmSearch
(1613)
-3.7

3 | 2
Atomic
Oct 17 3:54 AM
 • 1'
 • 4
p
 • 1-0
PandaFrame
(1834)
+3.9
ScarmSearch
(1617)
-3.8

3 | 2
Atomic
Oct 17 3:53 AM
 • 2'
 • 20
p
 • 0-1
PandaFrame
(1830)
+4.1
ScarmSearch
(1621)
-4

3 | 2
Atomic
Oct 17 3:52 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1826)
+4.3
ScarmSearch
(1625)
-4.1

3 | 2
Atomic
Oct 17 3:46 AM
 • 7'
 • 54
p
 • 0-1
Midgardsormur
(1689)
+15.1
PandaFrame
(1838)
-12.2

3 | 2
Atomic
Oct 17 3:38 AM
 • 8'
 • 61
p
 • 1-0
Midgardsormur
(1673)
+16.1
PandaFrame
(1851)
-12.9

3 | 2
Atomic
Oct 17 2:19 AM
 • 4'
 • 34
p
 • 0-1
PandaFrame
(1850)
+1.3
professor_pyro_5716
(1388)
-2.3

3 | 2
Atomic
Oct 17 2:09 AM
 • 8'
 • 75
p
 • 1-0
PandaFrame
(1838)
+11.8
menderus
(1964)
-10.9

3 | 2
Atomic
Oct 17 2:08 AM
 • 1'
 • 13
p
 • 1-0
PandaFrame
(1834)
+3.8
antonyrthekkethala
(1600)
-3.8

3 | 2
Atomic
Oct 17 2:08 AM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1832)
+1.8
zarif123455555555
(1437)
-3.7

3 | 2
Atomic
Oct 17 2:07 AM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1831)
+1.8
zarif123455555555
(1441)
-3.9

3 | 2
Atomic
Oct 17 2:04 AM
 • 2'
 • 14
p
 • 1-0
archie289
(1985)
+6.7
PandaFrame
(1836)
-5.3

3 | 2
Atomic
Oct 17 1:59 AM
 • 6'
 • 42
p
 • 1-0
PandaFrame
(1830)
+5.7
Hevler2
(1698)
-5.5

3 | 2
Atomic
Oct 17 1:57 AM
 • 2'
 • 14
p
 • 0-1
PandaFrame
(1828)
+2.2
Vartois
(1478)
-5.7

3 | 2
Atomic
Oct 17 1:57 AM
 • 1'
 • 10
p
 • 1-0
Tommaso_pl
(1882)
+8.3
PandaFrame
(1836)
-7.7

3 | 2
Atomic
Oct 16 2:50 PM
 • 6'
 • 49
p
 • 1-0
EnormousBlunt69420
(1966)
+6
PandaFrame
(1842)
-6

3 | 2
Atomic
Oct 16 2:48 PM
 • 3'
 • 22
p
 • 0-1
PandaFrame
(1839)
+2.1
Wat1sLife
(1476)
-2.7

3 | 2
Atomic
Oct 16 2:27 PM
 • 7'
 • 49
p
 • 1-0
meowmix321
(2000)
+6
PandaFrame
(1845)
-5.3

3 | 2
Atomic
Oct 16 2:26 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1843)
+2.1
calibaba
(1476)
-5.2

3 | 2
Atomic
Oct 16 2:24 PM
 • 2'
 • 20
p
 • 0-1
PandaFrame
(1840)
+2.2
calibaba
(1481)
-5.6

3 | 2
Atomic
Oct 16 2:21 PM
 • 4'
 • 37
p
 • 1-0
PandaFrame
(1835)
+5.3
jeofre
(1680)
-4.7

3 | 2
Atomic
Oct 16 2:17 PM
 • 4'
 • 49
p
 • 1-0
PandaFrame
(1830)
+5.6
jeofre
(1685)
-4.9

3 | 2
Atomic
Oct 16 1:20 PM
 • 2'
 • 29
p
 • 1-0
kuvonchoff
(1480)
+18.4
PandaFrame
(1846)
-16.3

3 | 2
Atomic
Oct 16 1:17 PM
 • 3'
 • 32
p
 • 0-1
PandaFrame
(1844)
+2.1
kuvonchoff
(1483)
-2.4

3 | 2
Atomic
Oct 16 1:17 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1842)
+2
Den2244
(1459)
-4.5

3 | 2
Atomic
Oct 16 1:15 PM
 • 2'
 • 16
p
 • 0-1
PandaFrame
(1839)
+2.7
SamuelGunka
(1527)
-3.6

3 | 2
Atomic
Oct 16 1:15 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1838)
+1.5
samruddhidatar
(1405)
-2.2

3 | 2
Atomic
Oct 16 1:14 PM
 • 1'
 • 9
p
 • 1-0
PandaFrame
(1832)
+5.5
SeanMcG
(1688)
-5.1

3 | 2
Atomic
Oct 16 1:14 PM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1830)
+2.3
kuvonchoff
(1491)
-2.7

3 | 2
Atomic
Oct 16 1:13 PM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1827)
+2.4
kuvonchoff
(1494)
-2.8

3 | 2
Atomic
Oct 16 1:12 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1825)
+2.3
kuvonchoff
(1488)
-2.8

3 | 2
Atomic
Oct 16 1:12 PM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1823)
+2.4
kuvonchoff
(1491)
-2.9

3 | 2
Atomic
Oct 16 1:09 PM
 • 2'
 • 23
p
 • 1-0
PandaFrame
(1821)
+2
notGM30
(1456)
-3.4

3 | 2
Atomic
Oct 16 1:07 PM
 • 2'
 • 22
p
 • 0-1
PandaFrame
(1813)
+7.4
rileyoneal
(1757)
-6.5

3 | 2
Atomic
Oct 16 1:06 PM
 • 2'
 • 17
p
 • 1-0
PandaFrame
(1811)
+2.6
Jes914
(1495)
-6.3

3 | 2
Atomic
Oct 16 12:39 PM
 • 6'
 • 56
p
 • 0-1
Hauhett
(1632)
+21.9
PandaFrame
(1823)
-12.9

3 | 2
Atomic
Oct 16 12:39 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1822)
+1.7
kuvonchoff
(1415)
-3.4

3 | 2
Atomic
Oct 16 12:38 PM
 • 1'
 • 14
p
 • 0-1
PandaFrame
(1820)
+1.7
kuvonchoff
(1418)
-3.5

3 | 2
Atomic
Oct 16 12:37 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1818)
+1.9
XJXWang
(1436)
-3.9

3 | 2
Atomic
Oct 16 12:37 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1816)
+1.9
XJXWang
(1440)
-4.1

3 | 2
Atomic
Oct 16 12:36 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1814)
+2.1
JerryJ0
(1463)
-3.7

3 | 2
Atomic
Oct 16 12:36 PM
 • 1'
 • 12
p
 • 0-1
JerryJ0
(1436)
+27.7
PandaFrame
(1829)
-15

3 | 2
Atomic
Oct 16 12:35 PM
 • 1'
 • 8
p
 • 0-1
PandaFrame
(1827)
+1.7
JerryJ0
(1439)
-3.1

3 | 2
Atomic
Oct 16 12:30 PM
 • 5'
 • 58
p
 • ½-½
PandaFrame
(1826)
+1.9
MikhailMCraft
(1910)
-2.2

3 | 2
Atomic
Oct 16 12:25 PM
 • 2'
 • 19
p
 • 1-0
PandaFrame
(1823)
+2.1
kuvonchoff
(1471)
-5.7

3 | 2
Atomic
Oct 16 9:33 AM
 • 4'
 • 39
p
 • 1-0
PandaFrame
(1821)
+2.7
hhgbbbb
(1525)
-7.4

3 | 2
Atomic
Oct 16 9:20 AM
 • 5'
 • 35
p
 • 1-0
PandaFrame
(1812)
+9.2
YouLoose_11
(1850)
-9.2

3 | 2
Atomic
Oct 16 9:19 AM
 • 1'
 • 9
p
 • 1-0
YouLoose_11
(1842)
+7.9
PandaFrame
(1819)
-7.8

3 | 2
Atomic
Oct 16 9:11 AM
 • 8'
 • 57
p
 • 1-0
PandaFrame
(1810)
+9.4
YouLoose_11
(1852)
-9.5

3 | 2
Atomic
Oct 16 7:25 AM
 • 2'
 • 21
p
 • 1-0
PandaFrame
(1808)
+2.4
jdavidagudelo
(1478)
-6.4

3 | 2
Atomic
Oct 16 7:22 AM
 • 3'
 • 22
p
 • 0-1
PandaFrame
(1805)
+2.5
ph0enix07
(1492)
-7.2

3 | 2
Atomic
Oct 16 7:20 AM
 • 3'
 • 21
p
 • 1-0
PandaFrame
(1802)
+2.7
ph0enix07
(1500)
-7.9

3 | 2
Atomic
Oct 15 4:37 PM
 • 2'
 • 22
p
 • 0-1
PandaFrame
(1800)
+2.8
edenmcnut9999
(1509)
-6.3

3 | 2
Atomic
Oct 15 4:36 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1797)
+2.9
edenmcnut9999
(1516)
-6.9

3 | 2
Atomic
Oct 15 4:31 PM
 • 5'
 • 34
p
 • 1-0
PandaFrame
(1790)
+6.9
chrschss
(1727)
-6.3

3 | 2
Atomic
Oct 15 4:27 PM
 • 4'
 • 27
p
 • 1-0
chrschss
(1717)
+9.5
PandaFrame
(1800)
-10.4

3 | 2
Atomic
Oct 15 4:25 PM
 • 3'
 • 24
p
 • 0-1
chrschss
(1707)
+10
PandaFrame
(1811)
-10.9

3 | 2
Atomic
Oct 15 4:24 PM
 • 2'
 • 13
p
 • 1-0
moimies505
(1511)
+29.1
PandaFrame
(1826)
-14.3

3 | 2
Atomic
Oct 15 4:16 PM
 • 8'
 • 86
p
 • 0-1
chrschss
(1696)
+10.8
PandaFrame
(1837)
-11.8

3 | 2
Atomic
Oct 15 4:10 PM
 • 5'
 • 67
p
 • 1-0
PandaFrame
(1830)
+7.7
roran_2018
(1793)
-7.9

3 | 2
Atomic
Oct 15 4:08 PM
 • 2'
 • 10
p
 • 1-0
PandaFrame
(1820)
+9.4
pm_attingly
(1848)
-9.7

3 | 2
Atomic
Oct 15 4:07 PM
 • 2'
 • 20
p
 • 0-1
PandaFrame
(1818)
+2.4
Nikos_Papailias
(1481)
-6.2

3 | 2
Atomic
Oct 15 4:01 PM
 • 5'
 • 32
p
 • 0-1
TurtleRegimentFour
(1542)
+23.4
PandaFrame
(1832)
-14.5

3 | 2
Atomic
Oct 15 3:38 PM
 • 3'
 • 28
p
 • 1-0
PandaFrame
(1830)
+2.3
Fixedplaystyle
(1492)
-5.5

3 | 2
Atomic
Oct 15 3:31 PM
 • 7'
 • 61
p
 • 1-0
monkpaw
(1720)
+10.6
PandaFrame
(1842)
-11.6

3 | 2
Atomic
Oct 15 1:26 AM
 • 7'
 • 38
p
 • 0-1
PandaFrame
(1838)
+3.4
Castielll5
(1583)
-4.2

3 | 2
Atomic
Oct 15 1:24 AM
 • 3'
 • 19
p
 • 0-1
PandaFrame
(1835)
+3.5
Castielll5
(1588)
-4.4

3 | 2
Atomic
Oct 15 1:22 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1831)
+3.7
Castielll5
(1592)
-4.6

3 | 2
Atomic
Oct 15 1:21 AM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1829)
+1.7
ongkunbinmoe
(1427)
-3.2

3 | 2
Atomic
Oct 14 1:12 PM
 • 6'
 • 39
p
 • 0-1
PandaFrame
(1827)
+1.8
doomkingdoom
(1443)
-2.4

3 | 2
Atomic
Oct 14 1:04 PM
 • 7'
 • 53
p
 • 1-0
PandaFrame
(1812)
+15.4
imbbj90
(2204)
-25.5

3 | 2
Atomic
Oct 14 1:00 PM
 • 5'
 • 43
p
 • 1-0
graaaaaaaaaaaant
(1692)
+10.6
PandaFrame
(1824)
-11.7

3 | 2
Atomic
Oct 14 12:56 PM
 • 4'
 • 26
p
 • 0-1
Gandalf0511
(1606)
+26.7
PandaFrame
(1837)
-13.2

3 | 2
Atomic
Oct 14 12:55 PM
 • 1'
 • 11
p
 • 1-0
PandaFrame
(1834)
+2.5
Kaphytl
(1516)
-6.5

3 | 2
Atomic
Oct 14 12:54 PM
 • 1'
 • 15
p
 • 1-0
PandaFrame
(1832)
+2.6
Kaphytl
(1523)
-7.1

3 | 2
Atomic
Oct 14 12:53 PM
 • 1'
 • 11
p
 • 1-0
jaco7726
(1634)
+11.9
PandaFrame
(1845)
-13.2

3 | 2
Atomic
Oct 14 12:51 PM
 • 2'
 • 18
p
 • 0-1
PandaFrame
(1843)
+2.5
camerontwu
(1520)
-5.6

3 | 2
Atomic
Oct 14 11:57 AM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1840)
+2.2
ZAres2
(1493)
-6.2

3 | 2
Atomic
Oct 14 11:55 AM
 • 2'
 • 19
p
 • 1-0
PandaFrame
(1838)
+2.3
ZAres2
(1500)
-6.7

3 | 2
Atomic
Oct 14 11:52 AM
 • 3'
 • 37
p
 • 1-0
PandaFrame
(1833)
+4.9
spreadtutoria
(1677)
-4.5

3 | 2
Atomic
Oct 14 11:50 AM
 • 3'
 • 17
p
 • 1-0
J_Kaleva
(1813)
+9.2
PandaFrame
(1842)
-9.2

3 | 2
Atomic
Oct 14 11:45 AM
 • 6'
 • 35
p
 • 1-0
J_Kaleva
(1804)
+9.7
PandaFrame
(1852)
-9.8

3 | 2
Atomic
Oct 14 11:42 AM
 • 3'
 • 29
p
 • 1-0
PandaFrame
(1850)
+2.2
chesspro21082008
(1500)
-6.4

3 | 2
Atomic
Oct 14 11:40 AM
 • 1'
 • 9
p
 • 1-0
PandaFrame
(1848)
+2.2
BatWomanV2
(1500)
-6.4

3 | 2
Atomic
Oct 14 11:38 AM
 • 3'
 • 20
p
 • 0-1
PandaFrame
(1845)
+2.6
Momaged123
(1534)
-5.7

3 | 2
Atomic
Oct 14 11:35 AM
 • 3'
 • 34
p
 • 0-1
PandaFrame
(1843)
+2.2
BobSnake5
(1498)
-6.5

3 | 2
Atomic
Oct 14 11:33 AM
 • 2'
 • 15
p
 • 0-1
PandaFrame
(1840)
+3
jambot360
(1566)
-4.5

3 | 2
Atomic
Oct 14 11:32 AM
 • 2'
 • 13
p
 • 1-0
PandaFrame
(1837)
+3.1
jambot360
(1570)
-4.7

3 | 2
Atomic
Oct 14 11:31 AM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1835)
+1.9
RimGMok
(1459)
-4.7

3 | 2
Atomic
Oct 14 7:17 AM
 • 2'
 • 13
p
 • 1-0
Flexr0
(2011)
+5.2
PandaFrame
(1840)
-4.6

3 | 2
Atomic
Oct 14 7:11 AM
 • 6'
 • 107
p
 • 1-0
Flexr0
(2006)
+5.5
PandaFrame
(1844)
-4.8

3 | 2
Atomic
Oct 14 7:09 AM
 • 2'
 • 12
p
 • 0-1
PandaFrame
(1839)
+5
KosmaKor
(1688)
-5.1

3 | 2
Atomic
Oct 14 7:06 AM
 • 4'
 • 36
p
 • 1-0
PandaFrame
(1831)
+8.4
Aydrias
(1828)
-8.8

3 | 2
Atomic
Oct 14 7:05 AM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1829)
+2
radkrish1994
(1464)
-5

3 | 2
Atomic
Oct 14 6:37 AM
 • 5'
 • 33
p
 • 1-0
PandaFrame
(1826)
+2.9
Momin23
(1541)
-5.1

3 | 2
Atomic
Oct 14 6:35 AM
 • 2'
 • 15
p
 • 1-0
PandaFrame
(1823)
+3
Momin23
(1546)
-5.4

3 | 2
Atomic
Oct 14 6:35 AM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1819)
+4.4
p16g
(1634)
-4.1

3 | 2
Atomic
Oct 14 6:31 AM
 • 5'
 • 35
p
 • 1-0
PandaFrame
(1814)
+4.6
p16g
(1638)
-4.2

3 | 2
Atomic
Oct 14 6:28 AM
 • 3'
 • 20
p
 • 0-1
olikim7
(1828)
+8.3
PandaFrame
(1823)
-8.4

3 | 2
Atomic
Oct 14 6:25 AM
 • 3'
 • 24
p
 • 0-1
PandaFrame
(1820)
+2.8
gamer-gamerjajaja
(1527)
-4.3

3 | 2
Atomic
Oct 14 6:24 AM
 • 1'
 • 8
p
 • 1-0
PandaFrame
(1816)
+4.2
volcano_000
(1616)
-3.7

3 | 2
Atomic
Oct 14 6:22 AM
 • 2'
 • 14
p
 • 1-0
PandaFrame
(1811)
+4.4
volcano_000
(1619)
-3.8

3 | 2
Atomic
Oct 14 6:22 AM
 • 1'
 • 17
p
 • 1-0
PandaFrame
(1809)
+2.6
pendirock
(1500)
-7.7

3 | 2
Atomic
Oct 14 6:17 AM
 • 4'
 • 49
p
 • 0-1
PandaFrame
(1801)
+7.6
CongHung12
(1758)
-6.9

3 | 2
Atomic
Oct 14 5:22 AM
 • 2'
 • 24
p
 • 1-0
PandaFrame
(1798)
+3.5
Kamilt69
(1552)
-3.4

3 | 2
Atomic
Oct 14 5:19 AM
 • 3'
 • 18
p
 • 0-1
PandaFrame
(1795)
+2.8
antonyrthekkethala
(1501)
-4.4

3 | 2
Atomic
Oct 14 5:17 AM
 • 3'
 • 26
p
 • 1-0
PandaFrame
(1792)
+2.7
ZippyPlayZ
(1492)
-4.9

3 | 2
Atomic
Oct 14 5:14 AM
 • 3'
 • 17
p
 • 1-0
nadonger205
(1802)
+8.3
PandaFrame
(1801)
-8.7

3 | 2
Atomic
Oct 14 5:13 AM
 • 2'
 • 16
p
 • 0-1
Mario092
(1421)
+23.6
PandaFrame
(1816)
-15.7

3 | 2
Atomic
Oct 13 2:46 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1814)
+2.4
yafgvhsa
(1485)
-6.4

3 | 2
Atomic
Oct 13 2:44 PM
 • 3'
 • 18
p
 • 0-1
PandaFrame
(1811)
+2.5
yafgvhsa
(1492)
-7

3 | 2
Atomic
Oct 13 2:42 PM
 • 2'
 • 18
p
 • 0-1
PandaFrame
(1809)
+2.6
yafgvhsa
(1500)
-7.7

3 | 2
Atomic
Oct 13 1:47 PM
 • 6'
 • 40
p
 • 0-1
PandaFrame
(1802)
+6.7
murtazahamid515253
(1723)
-9.1

3 | 2
Atomic
Oct 13 1:46 PM
 • 1'
 • 9
p
 • 1-0
deeplyClosetedChessMan
(1955)
+4.5
PandaFrame
(1807)
-5.3

3 | 2
Atomic
Oct 13 1:42 PM
 • 5'
 • 22
p
 • 0-1
PandaFrame
(1802)
+5.5
bones512
(1662)
-5.1

3 | 2
Atomic
Oct 13 1:42 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1799)
+2.7
dunghead9647
(1493)
-3.2

3 | 2
Atomic
Oct 13 1:35 PM
 • 7'
 • 50
p
 • 1-0
PandaFrame
(1788)
+11.4
chessman488
(1897)
-12

3 | 2
Atomic
Oct 13 1:34 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1786)
+2.3
CH3SSterfi3ld
(1442)
-4.4

3 | 2
Atomic
Oct 13 1:32 PM
 • 2'
 • 12
p
 • 0-1
Doctor_Where
(1536)
+14
PandaFrame
(1800)
-14.4

3 | 2
Atomic
Oct 13 1:32 PM
 • 1'
 • 12
p
 • 0-1
PandaFrame
(1798)
+1.9
RandomFNFan
(1419)
-1.7

3 | 2
Atomic
Oct 13 1:31 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1795)
+3.1
stefaaaansbsbsbsb
(1519)
-8

3 | 2
Atomic
Oct 13 1:30 PM
 • 1'
 • 6
p
 • 0-1
PandaFrame
(1793)
+2.4
CH3SSterfi3ld
(1458)
-5.8

3 | 2
Atomic
Oct 13 1:29 PM
 • 2'
 • 9
p
 • 0-1
ironw
(1549)
+34.2
PandaFrame
(1806)
-13.5

3 | 2
Atomic
Oct 13 1:28 PM
 • 1'
 • 6
p
 • 1-0
PandaFrame
(1804)
+1.8
RandomFNFan
(1419)
-1.6

3 | 2
Atomic
Oct 13 1:25 PM
 • 4'
 • 24
p
 • 0-1
PandaFrame
(1795)
+9.6
Damax00
(1838)
-9.4

3 | 2
Atomic
Oct 13 1:24 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1792)
+2.8
jhonnysix
(1496)
-7.9

3 | 2
Atomic
Oct 13 1:23 PM
 • 2'
 • 12
p
 • 0-1
njb4811
(1419)
+21.9
PandaFrame
(1807)
-15.4

3 | 2
Atomic
Oct 13 12:56 PM
 • 3'
 • 25
p
 • 1-0
PandaFrame
(1806)
+1.3
ermzyy
(1361)
-2.1

3 | 2
Atomic
Oct 13 12:31 PM
 • 3'
 • 19
p
 • 1-0
PandaFrame
(1801)
+4.5
Iplaythings
(1619)
-4.3

3 | 2
Atomic
Oct 13 12:29 PM
 • 2'
 • 21
p
 • 1-0
PandaFrame
(1797)
+4.7
Iplaythings
(1624)
-4.5

3 | 2
Atomic
Oct 13 12:24 PM
 • 5'
 • 50
p
 • 0-1
asuperiorbanana
(1784)
+8.7
PandaFrame
(1806)
-9.1

3 | 2
Atomic
Oct 13 12:21 PM
 • 4'
 • 33
p
 • 1-0
Freddioso
(2018)
+4.4
PandaFrame
(1810)
-4.1

3 | 2
Atomic
Oct 13 12:19 PM
 • 2'
 • 23
p
 • 0-1
TheYeyus
(2068)
+4.2
PandaFrame
(1813)
-3.4

3 | 2
Atomic
Oct 13 12:15 PM
 • 5'
 • 30
p
 • 0-1
ant_arctic
(1969)
+5.4
PandaFrame
(1819)
-5.2

3 | 2
Atomic
Oct 13 12:14 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1817)
+1.8
Joe83429
(1429)
-3.5

3 | 2
Atomic
Oct 13 12:13 PM
 • 2'
 • 9
p
 • 0-1
PandaFrame
(1814)
+2.6
Skywalker_1000
(1502)
-2.3

3 | 2
Atomic
Oct 13 12:04 PM
 • 6'
 • 48
p
 • 1-0
PandaFrame
(1812)
+2.6
Skywalker_1000
(1504)
-2.4

3 | 2
Atomic
Oct 13 12:02 PM
 • 3'
 • 30
p
 • 0-1
the_best-12
(1884)
+7.4
PandaFrame
(1819)
-7

3 | 2
Atomic
Oct 13 12:02 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1816)
+2.3
kammel414
(1475)
-6

3 | 2
Atomic
Oct 13 12:01 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1814)
+2.7
yoopug2010
(1514)
-4.3

3 | 2
Atomic
Oct 13 12:01 PM
 • 1'
 • 5
p
 • 1-0
PandaFrame
(1811)
+2.8
yoopug2010
(1519)
-4.6

3 | 2
Atomic
Oct 13 12:00 PM
 • 1'
 • 7
p
 • 1-0
PandaFrame
(1808)
+2.9
yoopug2010
(1523)
-4.8

3 | 2
Atomic
Oct 13 12:00 PM
 • 1'
 • 10
p
 • 0-1
PandaFrame
(1805)
+3
yoopug2010
(1528)
-5.1

3 | 2
Atomic
Oct 13 11:57 AM
 • 3'
 • 17
p
 • 1-0
PandaFrame
(1802)
+2.8
sawasthi2006
(1509)
-3.3

3 | 2
Atomic
Oct 13 11:57 AM
 • 1'
 • 9
p
 • 1-0
PandaFrame
(1799)
+2.7
xaeninshadowend
(1500)
-8

3 | 2
Atomic
Oct 13 11:55 AM
 • 2'
 • 23
p
 • 1-0
PandaFrame
(1791)
+8.8
asuperiorbanana
(1804)
-8.4

3 | 2
Atomic
Oct 13 11:52 AM
 • 3'
 • 26
p
 • 0-1
ciro_mertens
(1701)
+10.1
PandaFrame
(1802)
-11

3 | 2
Atomic
Oct 13 11:48 AM
 • 2'
 • 11
p
 • 0-1
PandaFrame
(1799)
+2.9
BSTIcecream
(1510)
-2.6

3 | 2
Atomic
Oct 13 11:48 AM
 • 1'
 • 8
p
 • 1-0
PandaFrame
(1796)
+2.9
BSTIcecream
(1512)
-2.7

3 | 2
Atomic
Oct 13 11:45 AM
 • 3'
 • 23
p
 • 1-0
PandaFrame
(1793)
+3
BSTIcecream
(1515)
-2.7

3 | 2
Atomic
Oct 13 11:44 AM
 • 1'
 • 13
p
 • 0-1
PandaFrame
(1790)
+3
qwertyuiopkeys
(1514)
-6.4

3 | 2
Atomic
Oct 13 11:41 AM
 • 3'
 • 28
p
 • 1-0
PandaFrame
(1781)
+8.5
kingcobrax03
(1777)
-8.6`
}