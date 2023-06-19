const constants = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dateRegex: /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d+ \d+:\d+ [AP]M/g,
    testYear: "1984",
    testNames: "izyuu",
    testInput: `3 | 2
Atomic
May 24 10:06 AM
 • 5'
 • 68
p
 • 0-1
izyuu
(2634)
+1.6
anonymous584
(2174)
-1.3

3 | 2
Atomic
May 24 10:03 AM
 • 3'
 • 29
p
 • 1-0
izyuu
(2633)
+1.6
anonymous584
(2175)
-1.3

3 | 2
Atomic
May 24 9:59 AM
 • 4'
 • 30
p
 • 0-1
izyuu
(2631)
+1.6
anonymous584
(2176)
-1.3

3 | 2
Atomic
May 23 7:56 PM
 • 3'
 • 27
p
 • 1-0
izyuu
(2630)
+1.3
CCM278
(2138)
-1.3

3 | 2
Atomic
May 23 7:47 PM
 • 7'
 • 42
p
 • 0-1
izyuu
(2628)
+1.4
CCM278
(2139)
-1.3

3 | 2
Atomic
May 20 6:10 PM
 • 2'
 • 10
p
 • 1-0
izyuu
(2627)
+1.9
lutobida
(2200)
-1.6

3 | 2
Atomic
May 20 6:03 PM
 • 6'
 • 43
p
 • 0-1
izyuu
(2625)
+1.9
lutobida
(2201)
-1.6

3 | 2
Atomic
May 18 10:35 AM
 • 8'
 • 110
p
 • 0-1
izyuu
(2622)
+2.4
anonymous584
(2246)
-2.7

3 | 2
Atomic
May 18 10:33 AM
 • 2'
 • 29
p
 • 1-0
izyuu
(2620)
+2.5
anonymous584
(2248)
-2.8

3 | 2
Atomic
May 18 10:29 AM
 • 4'
 • 55
p
 • 0-1
izyuu
(2617)
+2.5
anonymous584
(2251)
-2.8

3 | 2
Atomic
May 18 10:25 AM
 • 4'
 • 40
p
 • 1-0
izyuu
(2615)
+2.6
anonymous584
(2254)
-2.9

3 | 2
Atomic
May 17 9:53 PM
 • 7'
 • 67
p
 • 1-0
zNightmxrez
(2619)
+20.4
izyuu
(2628)
-10.9

3 | 2
Atomic
May 17 9:48 PM
 • 4'
 • 45
p
 • ½-½
izyuu
(2628)
-0.3
zNightmxrez
(2618)
+0.6

3 | 2
Atomic
May 17 9:40 PM
 • 7'
 • 70
p
 • 1-0
zNightmxrez
(2591)
+26.6
izyuu
(2641)
-12.6

3 | 2
Atomic
May 17 2:46 PM
 • 9'
 • 77
p
 • 1-0
izyuu
(2640)
+0.7
CCM278
(2009)
-0.6

3 | 2
Atomic
May 17 7:42 AM
 • 8'
 • 69
p
 • 0-1
izyuu
(2639)
+1
Decker1515
(2091)
-1

3 | 2
Atomic
May 17 7:38 AM
 • 4'
 • 34
p
 • 1-0
izyuu
(2638)
+1
Decker1515
(2092)
-1

3 | 2
Atomic
May 16 10:35 AM
 • 4'
 • 26
p
 • 0-1
izyuu
(2637)
+1.4
PandaFrame
(2144)
-0.9

3 | 2
Atomic
May 16 10:32 AM
 • 3'
 • 24
p
 • 1-0
izyuu
(2636)
+1.4
PandaFrame
(2145)
-0.9

3 | 2
Atomic
May 16 10:29 AM
 • 3'
 • 49
p
 • 0-1
izyuu
(2634)
+1.4
PandaFrame
(2146)
-0.9

3 | 2
Atomic
May 16 10:21 AM
 • 8'
 • 50
p
 • 1-0
izyuu
(2625)
+9.6
zNightmxrez
(2578)
-19.1

3 | 2
Atomic
May 16 10:14 AM
 • 6'
 • 42
p
 • 1-0
zNightmxrez
(2548)
+29.8
izyuu
(2638)
-13.8

3 | 2
Atomic
May 15 11:19 AM
 • 7'
 • 40
p
 • 1-0
zNightmxrez
(2513)
+33.5
izyuu
(2654)
-15.6

3 | 2
Atomic
May 14 9:04 AM
 • 3'
 • 29
p
 • 1-0
izyuu
(2651)
+3.1
YessssssDoooooThat
(2302)
-3.7

3 | 2
Atomic
May 14 8:56 AM
 • 7'
 • 47
p
 • 0-1
izyuu
(2648)
+3.2
YessssssDoooooThat
(2306)
-3.8

3 | 2
Atomic
May 14 8:49 AM
 • 7'
 • 45
p
 • 1-0
izyuu
(2645)
+3.3
YessssssDoooooThat
(2310)
-4

3 | 2
Atomic
May 13 2:25 PM
 • 4'
 • 48
p
 • 1-0
izyuu
(2635)
+10
permski_cry
(2566)
-14.8

3 | 2
Atomic
May 13 2:20 PM
 • 2'
 • 25
p
 • 0-1
izyuu
(2630)
+4.9
Mstake1
(2370)
-5.1

3 | 2
Atomic
May 12 5:45 PM
 • 6'
 • 31
p
 • 0-1
izyuu
(2628)
+1.7
Infinite_Derps
(2156)
-1.1

3 | 2
Atomic
May 12 5:44 PM
 • 2'
 • 13
p
 • 1-0
izyuu
(2626)
+1.8
Infinite_Derps
(2158)
-1.1

3 | 2
Atomic
May 12 5:37 PM
 • 7'
 • 57
p
 • 0-1
izyuu
(2624)
+1.8
Infinite_Derps
(2159)
-1.1

3 | 2
Atomic
May 12 5:31 PM
 • 4'
 • 28
p
 • 1-0
izyuu
(2623)
+1.8
Infinite_Derps
(2160)
-1.2

3 | 2
Atomic
May 12 5:24 PM
 • 7'
 • 47
p
 • 0-1
izyuu
(2621)
+1.8
Infinite_Derps
(2161)
-1.2

3 | 2
Atomic
May 12 5:16 PM
 • 5'
 • 24
p
 • 1-0
izyuu
(2619)
+1.9
Infinite_Derps
(2162)
-1.2

3 | 2
Atomic
May 12 5:09 PM
 • 6'
 • 38
p
 • 0-1
izyuu
(2617)
+1.9
Infinite_Derps
(2163)
-1.1

3 | 2
Atomic
May 12 5:04 PM
 • 5'
 • 27
p
 • 1-0
izyuu
(2615)
+1.9
Infinite_Derps
(2165)
-1.1

3 | 2
Atomic
May 12 5:00 PM
 • 4'
 • 17
p
 • 0-1
izyuu
(2613)
+2
Infinite_Derps
(2166)
-1.1

3 | 2
Atomic
May 12 4:56 PM
 • 4'
 • 33
p
 • 1-0
izyuu
(2611)
+2
Infinite_Derps
(2167)
-1.1

3 | 2
Atomic
May 12 3:29 PM
 • 6'
 • 26
p
 • 1-0
izyuu
(2610)
+1.4
lutobida
(2090)
-1

3 | 2
Atomic
May 12 3:23 PM
 • 6'
 • 25
p
 • 0-1
izyuu
(2608)
+1.4
lutobida
(2091)
-1

3 | 2
Atomic
May 12 3:20 PM
 • 3'
 • 20
p
 • 1-0
izyuu
(2607)
+1.4
lutobida
(2092)
-1

3 | 2
Atomic
May 11 3:09 PM
 • 5'
 • 33
p
 • 0-1
izyuu
(2606)
+0.9
sigmarizzwolf
(2023)
-0.7

3 | 2
Atomic
May 11 8:10 AM
 • 4'
 • 27
p
 • 0-1
izyuu
(2604)
+2.1
PandaFrame
(2172)
-1.4

3 | 2
Atomic
May 11 8:08 AM
 • 2'
 • 12
p
 • 1-0
izyuu
(2602)
+2.1
PandaFrame
(2174)
-1.4

3 | 2
Atomic
May 11 8:06 AM
 • 2'
 • 27
p
 • 0-1
izyuu
(2600)
+2.2
PandaFrame
(2175)
-1.4

3 | 2
Atomic
May 11 7:57 AM
 • 6'
 • 51
p
 • 0-1
izyuu
(2597)
+2.2
PandaFrame
(2176)
-1.4

3 | 2
Atomic
May 11 7:55 AM
 • 2'
 • 17
p
 • 1-0
izyuu
(2595)
+2.3
PandaFrame
(2178)
-1.4

3 | 2
Atomic
May 11 7:49 AM
 • 7'
 • 40
p
 • 0-1
izyuu
(2593)
+2.3
PandaFrame
(2179)
-1.4

3 | 2
Atomic
May 11 7:39 AM
 • 9'
 • 85
p
 • 0-1
izyuu
(2591)
+1.8
lutobida
(2126)
-1.3

3 | 2
Atomic
May 6 4:45 PM
 • 3'
 • 32
p
 • 0-1
izyuu
(2589)
+1.9
SilverPotato652
(2140)
-1.3

3 | 2
Atomic
May 6 4:40 PM
 • 4'
 • 32
p
 • 1-0
izyuu
(2587)
+2
SilverPotato652
(2142)
-1.3

3 | 2
Atomic
May 6 4:36 PM
 • 4'
 • 27
p
 • 0-1
izyuu
(2585)
+2
SilverPotato652
(2143)
-1.3

3 | 2
Atomic
May 5 6:19 PM
 • 3'
 • 18
p
 • 1-0
izyuu
(2584)
+0.9
CCM278
(1989)
-0.7

3 | 2
Atomic
May 5 6:16 PM
 • 3'
 • 19
p
 • 0-1
izyuu
(2583)
+0.9
CCM278
(1990)
-0.7

3 | 2
Atomic
May 5 6:14 PM
 • 3'
 • 18
p
 • 1-0
izyuu
(2582)
+0.9
CCM278
(1990)
-0.6

3 | 2
Atomic
May 5 2:20 PM
 • 3'
 • 30
p
 • 1-0
izyuu
(2580)
+2.7
PandaFrame
(2201)
-1.7

3 | 2
Atomic
May 5 2:12 PM
 • 8'
 • 54
p
 • 0-1
izyuu
(2577)
+2.8
PandaFrame
(2203)
-1.8

3 | 2
Atomic
May 5 12:48 PM
 • 6'
 • 79
p
 • ½-½
scenry1
(2106)
+7.4
izyuu
(2588)
-11.3

3 | 2
Atomic
May 5 12:47 PM
 • 2'
 • 24
p
 • 1-0
izyuu
(2587)
+1.6
scenry1
(2107)
-1.1

3 | 2
Atomic
May 4 11:18 AM
 • 6'
 • 42
p
 • 0-1
izyuu
(2586)
+0.3
jacobear
(1804)
-0.2

3 | 2
Atomic
May 4 11:17 AM
 • 2'
 • 11
p
 • 1-0
izyuu
(2586)
+0.3
jacobear
(1804)
-0.2

3 | 2
Atomic
May 4 11:11 AM
 • 5'
 • 33
p
 • 0-1
izyuu
(2583)
+2.6
pawnytales
(2202)
-2.9

3 | 2
Atomic
May 3 7:51 PM
 • 4'
 • 35
p
 • 0-1
izyuu
(2578)
+5.8
sezonirit
(2367)
-7.3

3 | 2
Atomic
May 3 5:12 PM
 • 7'
 • 46
p
 • 0-1
izyuu
(2577)
+0.3
GothamChessFanForLife
(1763)
-0.2

3 | 2
Atomic
May 3 5:09 PM
 • 3'
 • 19
p
 • 1-0
izyuu
(2577)
+0.3
GothamChessFanForLife
(1763)
-0.2

3 | 2
Atomic
May 3 12:48 PM
 • 7'
 • 45
p
 • 1-0
izyuu
(2576)
+1.3
lutobida
(2058)
-1.1

3 | 2
Atomic
May 3 12:45 PM
 • 3'
 • 13
p
 • 0-1
izyuu
(2574)
+1.3
lutobida
(2060)
-1.1

3 | 2
Atomic
May 3 12:36 PM
 • 7'
 • 43
p
 • 1-0
izyuu
(2573)
+1.3
lutobida
(2061)
-1.1

3 | 2
Atomic
May 3 12:27 PM
 • 7'
 • 55
p
 • 0-1
izyuu
(2571)
+2.2
PandaFrame
(2161)
-1.4

3 | 2
Atomic
May 3 12:22 PM
 • 5'
 • 43
p
 • 1-0
izyuu
(2569)
+2.3
PandaFrame
(2162)
-1.4

3 | 2
Atomic
May 3 12:16 PM
 • 6'
 • 27
p
 • 1-0
izyuu
(2568)
+0.3
GothamChessFanForLife
(1764)
-0.2

3 | 2
Atomic
May 2 6:43 PM
 • 4'
 • 20
p
 • 1-0
izyuu
(2568)
+0.3
GothamChessFanForLife
(1759)
-0.2

3 | 2
Atomic
May 2 6:40 PM
 • 3'
 • 18
p
 • 0-1
izyuu
(2568)
+0.2
GothamChessFanForLife
(1759)
-0.2

3 | 2
Atomic
May 2 6:34 PM
 • 6'
 • 27
p
 • 1-0
izyuu
(2568)
+0.2
GothamChessFanForLife
(1759)
-0.2

3 | 2
Atomic
May 2 6:31 PM
 • 3'
 • 23
p
 • 0-1
izyuu
(2567)
+0.2
GothamChessFanForLife
(1759)
-0.2

3 | 2
Atomic
May 2 6:18 PM
 • 6'
 • 50
p
 • 0-1
izyuu
(2566)
+1.9
KPFailsafe
(2134)
-2

3 | 2
Atomic
May 2 2:18 PM
 • 4'
 • 35
p
 • 0-1
izyuu
(2565)
+1
lutobida
(2015)
-0.9

3 | 2
Atomic
May 2 2:00 PM
 • 9'
 • 74
p
 • 1-0
izyuu
(2564)
+1
lutobida
(2016)
-0.9

3 | 2
Atomic
May 2 1:27 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(2563)
+0.2
calderIScool
(1685)
-0.1

3 | 2
Atomic
May 1 5:46 PM
 • 4'
 • 38
p
 • 1-0
izyuu
(2557)
+6.1
sezonirit
(2391)
-10.8

3 | 2
Atomic
May 1 5:39 PM
 • 6'
 • 73
p
 • 1-0
izyuu
(2556)
+1.4
Jeytex
(2079)
-1.6

3 | 2
Atomic
May 1 5:00 PM
 • 5'
 • 57
p
 • 1-0
izyuu
(2556)
+0.4
Chess_Player_11008
(1830)
-0.3

3 | 2
Atomic
May 1 1:15 PM
 • 5'
 • 40
p
 • 0-1
izyuu
(2554)
+1.4
viktorveit
(2084)
-1

3 | 2
Atomic
May 1 1:09 PM
 • 7'
 • 43
p
 • 1-0
izyuu
(2553)
+1.5
viktorveit
(2085)
-1

3 | 2
Atomic
May 1 1:05 PM
 • 3'
 • 19
p
 • 1-0
izyuu
(2551)
+1.5
viktorveit
(2086)
-1

3 | 2
Atomic
May 1 11:18 AM
 • 4'
 • 21
p
 • 0-1
PandaFrame
(2094)
+16.5
izyuu
(2571)
-20

3 | 2
Atomic
May 1 11:14 AM
 • 3'
 • 26
p
 • 0-1
izyuu
(2570)
+1.4
PandaFrame
(2095)
-1.1

3 | 2
Atomic
May 1 11:09 AM
 • 4'
 • 40
p
 • 1-0
izyuu
(2568)
+1.4
PandaFrame
(2096)
-1.1

3 | 2
Atomic
May 1 11:06 AM
 • 4'
 • 26
p
 • 0-1
izyuu
(2567)
+1.4
PandaFrame
(2097)
-1.1

3 | 2
Atomic
May 1 11:04 AM
 • 2'
 • 19
p
 • 1-0
izyuu
(2566)
+1.4
PandaFrame
(2099)
-1.1

3 | 2
Atomic
May 1 10:59 AM
 • 4'
 • 28
p
 • 0-1
izyuu
(2564)
+1.4
PandaFrame
(2100)
-1.1

3 | 2
Atomic
May 1 10:57 AM
 • 3'
 • 23
p
 • 1-0
izyuu
(2563)
+1.4
PandaFrame
(2101)
-1.1

3 | 2
Atomic
May 1 10:55 AM
 • 3'
 • 36
p
 • 0-1
izyuu
(2561)
+1.4
PandaFrame
(2102)
-1.1

3 | 2
Atomic
May 1 10:44 AM
 • 9'
 • 99
p
 • ½-½
M2U7I9I6
(2606)
-2.2
izyuu
(2560)
+1.2

3 | 2
Explosive Fight
May 1 10:34 AM
 • 8'
 • 74
p
 • 1-0
M2U7I9I6
(2589)
+17.4
izyuu
(2570)
-9.4

3 | 2
Atomic
May 1 10:25 AM
 • 9'
 • 87
p
 • 1-0
TheRebornAtom
(2149)
+17
izyuu
(2589)
-19.2

3 | 2
Atomic
Apr 30 11:36 PM
 • 6'
 • 32
p
 • 1-0
izyuu
(2584)
+4.4
EagleOnHigh
(2352)
-4.5

3 | 2
Atomic
Apr 30 11:28 PM
 • 6'
 • 47
p
 • 0-1
izyuu
(2580)
+4.7
EagleOnHigh
(2357)
-4.7

3 | 2
Atomic
Apr 30 9:09 PM
 • 3'
 • 35
p
 • 0-1
izyuu
(2578)
+2.2
supercoolguy2000
(2192)
-3.2

3 | 2
Atomic
Apr 30 7:52 PM
 • 3'
 • 46
p
 • 1-0
izyuu
(2575)
+2.3
GryphonWithACrown
(2200)
-3.2

3 | 2
Atomic
Apr 30 7:37 PM
 • 6'
 • 46
p
 • 1-0
izyuu
(2572)
+3.1
sezonirit
(2259)
-3.2

3 | 2
Atomic
Apr 30 7:01 PM
 • 2'
 • 22
p
 • 1-0
izyuu
(2570)
+1.8
groshks
(2141)
-2

3 | 2
Atomic
Apr 29 6:45 PM
 • 8'
 • 63
p
 • 0-1
izyuu
(2566)
+4.3
titanium371
(2325)
-5

3 | 2
Atomic
Apr 28 8:42 PM
 • 4'
 • 31
p
 • 1-0
izyuu
(2563)
+2.7
pawnytales
(2215)
-3.8

3 | 2
Atomic
Apr 28 8:40 PM
 • 2'
 • 23
p
 • 1-0
izyuu
(2561)
+2.8
pawnytales
(2219)
-3.9

3 | 2
Atomic
Apr 28 8:35 PM
 • 5'
 • 61
p
 • 1-0
izyuu
(2558)
+2.9
pawnytales
(2223)
-4.1

3 | 2
Atomic
Apr 28 7:58 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(2558)
+0.1
Prodechan
(1549)
-0.1

3 | 2
Atomic
Apr 28 7:54 PM
 • 2'
 • 16
p
 • 1-0
izyuu
(2556)
+2
groshks
(2153)
-2.3

3 | 2
Atomic
Apr 28 7:51 PM
 • 3'
 • 25
p
 • 0-1
izyuu
(2554)
+2
groshks
(2156)
-2.4

3 | 2
Atomic
Apr 28 7:45 PM
 • 6'
 • 48
p
 • 1-0
izyuu
(2552)
+2.1
groshks
(2158)
-2.5

3 | 2
Atomic
Apr 28 7:40 PM
 • 5'
 • 36
p
 • 1-0
izyuu
(2549)
+2.1
groshks
(2163)
-2.5

3 | 2
Atomic
Apr 28 7:09 PM
 • 6'
 • 32
p
 • 0-1
izyuu
(2548)
+1.9
Diplodocus1015
(2135)
-1.5

3 | 2
Atomic
Apr 27 4:58 PM
 • 3'
 • 24
p
 • 1-0
izyuu
(2546)
+1.3
SilverPotato652
(2070)
-1.1

3 | 2
Atomic
Apr 27 4:52 PM
 • 6'
 • 58
p
 • 0-1
izyuu
(2545)
+1.3
SilverPotato652
(2071)
-1.1

3 | 2
Atomic
Apr 27 4:50 PM
 • 2'
 • 32
p
 • 1-0
izyuu
(2544)
+1.3
SilverPotato652
(2072)
-1.1

3 | 2
Atomic
Apr 27 4:48 PM
 • 3'
 • 21
p
 • 0-1
izyuu
(2542)
+1.3
SilverPotato652
(2073)
-1.1

3 | 2
Atomic
Apr 27 4:35 PM
 • 6'
 • 48
p
 • 0-1
izyuu
(2540)
+2.7
pawnytales
(2212)
-4.3

3 | 2
Atomic
Apr 27 3:17 PM
 • 6'
 • 57
p
 • ½-½
pawnytales
(2196)
+11.9
izyuu
(2547)
-7.3

3 | 2
Atomic
Apr 27 3:09 PM
 • 6'
 • 43
p
 • 0-1
izyuu
(2544)
+2.5
pawnytales
(2200)
-4.1

3 | 2
Atomic
Apr 27 3:01 PM
 • 7'
 • 98
p
 • 1-0
dsoarhsh
(2240)
+25.2
izyuu
(2561)
-16.7

3 | 2
Atomic
Apr 27 2:56 PM
 • 4'
 • 33
p
 • 0-1
izyuu
(2559)
+2.4
pawnytales
(2201)
-3.8

3 | 2
Atomic
Apr 26 8:01 PM
 • 8'
 • 52
p
 • 1-0
izyuu
(2554)
+4.2
titanium371
(2321)
-5

3 | 2
Atomic
Apr 26 7:56 PM
 • 6'
 • 41
p
 • 0-1
izyuu
(2550)
+4.4
titanium371
(2326)
-5.3

3 | 2
Atomic
Apr 26 11:30 AM
 • 4'
 • 6
p
 • 1-0
izyuu
(2550)
+0
Mixstrid
(1473)
+0

3 | 2
Atomic
Apr 26 8:54 AM
 • 4'
 • 28
p
 • 1-0
izyuu
(2546)
+3.6
mclaurin1992
(2277)
-3

3 | 2
Atomic
Apr 26 8:49 AM
 • 6'
 • 42
p
 • 0-1
izyuu
(2543)
+3.7
mclaurin1992
(2280)
-3.1

3 | 2
Atomic
Apr 26 8:40 AM
 • 6'
 • 67
p
 • 0-1
caavt
(2570)
+13.6
izyuu
(2552)
-9.3

3 | 2
Atomic
Apr 26 8:31 AM
 • 9'
 • 80
p
 • 1-0
caavt
(2555)
+15.3
izyuu
(2562)
-10.2

3 | 2
Atomic
Apr 26 8:08 AM
 • 6'
 • 69
p
 • 1-0
izyuu
(2551)
+10.7
caavt
(2569)
-16.3

3 | 2
Atomic
Apr 26 7:57 AM
 • 9'
 • 98
p
 • ½-½
caavt
(2570)
-0.9
izyuu
(2551)
+0.5

3 | 2
Atomic
Apr 26 7:49 AM
 • 8'
 • 65
p
 • 1-0
izyuu
(2539)
+12.2
caavt
(2590)
-19.9

3 | 2
Atomic
Apr 26 7:41 AM
 • 8'
 • 73
p
 • 1-0
caavt
(2572)
+17.4
izyuu
(2549)
-10.2

3 | 2
Atomic
Apr 26 7:15 AM
 • 3'
 • 26
p
 • 1-0
izyuu
(2546)
+3.1
dragonfire2
(2215)
-3.3

3 | 2
Atomic
Apr 26 7:11 AM
 • 4'
 • 27
p
 • 0-1
izyuu
(2543)
+3.3
dragonfire2
(2219)
-3.5

3 | 2
Atomic
Apr 26 7:05 AM
 • 6'
 • 63
p
 • 1-0
izyuu
(2539)
+3.4
dragonfire2
(2222)
-3.6

3 | 2
Atomic
Apr 26 6:59 AM
 • 6'
 • 37
p
 • 0-1
izyuu
(2536)
+3.5
dragonfire2
(2226)
-3.8

3 | 2
Atomic
Apr 25 3:23 PM
 • 8'
 • 89
p
 • 1-0
izyuu
(2533)
+2.5
New-To-Chesss
(2153)
-2.2

3 | 2
Atomic
Apr 25 3:17 PM
 • 5'
 • 27
p
 • 0-1
izyuu
(2532)
+1.7
ormondello
(2072)
-1.2

3 | 2
Atomic
Apr 25 9:13 AM
 • 3'
 • 31
p
 • 0-1
izyuu
(2529)
+2.9
Lenny_LB10
(2174)
-3

3 | 2
Atomic
Apr 25 9:08 AM
 • 5'
 • 39
p
 • 1-0
izyuu
(2526)
+3
Lenny_LB10
(2177)
-3.1

3 | 2
Atomic
Apr 25 9:07 AM
 • 2'
 • 20
p
 • 0-1
izyuu
(2526)
+0.1
pbjwizard
(1468)
-0.1

3 | 2
Atomic
Apr 24 11:33 AM
 • 3'
 • 21
p
 • 0-1
izyuu
(2525)
+0.4
gfitzhugh
(1801)
-0.3

3 | 2
Atomic
Apr 24 11:25 AM
 • 5'
 • 43
p
 • 1-0
izyuu
(2523)
+1.8
shane_earl
(2086)
-1.3

3 | 2
Atomic
Apr 24 9:06 AM
 • 8'
 • 74
p
 • 1-0
izyuu
(2511)
+12.2
CaptainsOfCrush
(2535)
-13.6

3 | 2
Atomic
Apr 24 9:02 AM
 • 4'
 • 22
p
 • 0-1
izyuu
(2511)
+0.6
gimme_your_ELO
(1857)
-0.5

3 | 2
Atomic
Apr 24 8:55 AM
 • 5'
 • 38
p
 • 1-0
izyuu
(2508)
+2.4
PandaFrame
(2123)
-1.7

3 | 2
Atomic
Apr 24 8:51 AM
 • 5'
 • 48
p
 • 0-1
izyuu
(2506)
+2.5
PandaFrame
(2124)
-1.7

3 | 2
Atomic
Apr 24 8:47 AM
 • 3'
 • 25
p
 • 0-1
izyuu
(2503)
+2.6
MarthLikinte
(2128)
-2.9

3 | 2
Atomic
Apr 24 8:43 AM
 • 3'
 • 23
p
 • 0-1
izyuu
(2501)
+2.5
Schnabel66
(2116)
-2

3 | 2
Atomic
Apr 24 8:37 AM
 • 6'
 • 77
p
 • ½-½
mbperini
(2316)
+8.1
izyuu
(2506)
-5.6

3 | 2
Atomic
Apr 24 8:29 AM
 • 5'
 • 39
p
 • 1-0
izyuu
(2504)
+2.6
Diplodocus1015
(2128)
-1.8

3 | 2
Atomic
Apr 24 8:11 AM
 • 5'
 • 43
p
 • 0-1
izyuu
(2501)
+2.6
PandaFrame
(2126)
-1.7

3 | 2
Atomic
Apr 24 8:07 AM
 • 4'
 • 42
p
 • 1-0
izyuu
(2498)
+2.7
PandaFrame
(2128)
-1.7

3 | 2
Atomic
Apr 24 8:05 AM
 • 2'
 • 41
p
 • 0-1
izyuu
(2495)
+2.8
PandaFrame
(2129)
-1.8

3 | 2
Atomic
Apr 24 7:44 AM
 • 7'
 • 67
p
 • 0-1
J-83
(2168)
+21.1
izyuu
(2517)
-21.6

3 | 2
Atomic
Apr 20 5:55 AM
 • 6'
 • 47
p
 • 1-0
izyuu
(2517)
+2.4
KPFailsafe
(2121)
-2.5

3 | 2
Atomic
Apr 20 5:46 AM
 • 3'
 • 33
p
 • 0-1
izyuu
(2514)
+3.4
pawnytales
(2185)
-4.5

3 | 2
Atomic
Apr 20 5:18 AM
 • 7'
 • 51
p
 • 1-0
izyuu
(2511)
+2.5
Diplodocus1015
(2119)
-1.6

3 | 2
Atomic
Apr 19 7:29 PM
 • 3'
 • 25
p
 • 1-0
izyuu
(2508)
+2.9
Ieatblueberries
(2142)
-3.6

3 | 2
Atomic
Apr 19 7:25 PM
 • 3'
 • 19
p
 • 0-1
izyuu
(2505)
+3
Ieatblueberries
(2146)
-3.7

3 | 2
Atomic
Apr 19 7:22 PM
 • 4'
 • 30
p
 • 1-0
izyuu
(2502)
+3.1
Ieatblueberries
(2150)
-3.9

3 | 2
Atomic
Apr 19 7:18 PM
 • 4'
 • 26
p
 • 0-1
izyuu
(2500)
+2.7
KPFailsafe
(2119)
-2.5

3 | 2
Atomic
Apr 19 7:15 PM
 • 2'
 • 13
p
 • 0-1
izyuu
(2497)
+2.8
KPFailsafe
(2122)
-2.6

3 | 2
Atomic
Apr 19 6:29 PM
 • 3'
 • 39
p
 • 0-1
izyuu
(2493)
+3.5
biloly
(2163)
-4.2

3 | 2
Atomic
Apr 19 6:24 PM
 • 5'
 • 77
p
 • 1-0
Its_Oniiix
(2313)
+22.1
izyuu
(2513)
-19.3

3 | 2
Atomic
Apr 19 6:18 PM
 • 7'
 • 107
p
 • 1-0
izyuu
(2506)
+7
Its_Oniiix
(2321)
-8

3 | 2
Atomic
Apr 19 6:04 AM
 • 6'
 • 66
p
 • 0-1
izyuu
(2502)
+3.4
jetjelly
(2151)
-2.9

3 | 2
Atomic
Apr 19 5:58 AM
 • 3'
 • 33
p
 • 0-1
izyuu
(2501)
+1.6
TreadHead101
(2003)
-1.3

3 | 2
Atomic
Apr 19 5:53 AM
 • 3'
 • 26
p
 • 0-1
izyuu
(2499)
+1.7
PandaFrame
(2013)
-1.1

3 | 2
Atomic
Apr 16 2:21 AM
 • 2'
 • 21
p
 • 1-0
izyuu
(2499)
+0.2
hernandezsucks
(1582)
-0.1

3 | 2
Atomic
Apr 15 9:03 PM
 • 5'
 • 32
p
 • 1-0
izyuu
(2492)
+6.9
titanium371
(2296)
-6.3

3 | 2
Atomic
Apr 15 9:00 PM
 • 3'
 • 28
p
 • 1-0
Its_Oniiix
(2304)
+23.1
izyuu
(2513)
-21.2

3 | 2
Atomic
Apr 15 8:56 PM
 • 4'
 • 38
p
 • 1-0
izyuu
(2511)
+2.2
shortlight
(2060)
-1.7

3 | 2
Atomic
Apr 15 8:41 PM
 • 14'
 • 293
p
 • ½-½
izyuu
(2519)
-8
Its_Oniiix
(2291)
+8.7

3 | 2
Atomic
Apr 15 8:35 PM
 • 6'
 • 46
p
 • 0-1
izyuu
(2517)
+2.1
Alcam84
(2057)
-1.3

3 | 2
Atomic
Apr 15 6:49 PM
 • 4'
 • 21
p
 • 1-0
izyuu
(2516)
+1.2
Garbanzo55
(1955)
-0.8

3 | 2
Atomic
Apr 15 6:47 PM
 • 2'
 • 16
p
 • 0-1
izyuu
(2514)
+1.2
Garbanzo55
(1955)
-0.8

3 | 2
Atomic
Apr 15 6:44 PM
 • 2'
 • 15
p
 • 1-0
izyuu
(2513)
+1.3
Garbanzo55
(1956)
-0.8

3 | 2
Atomic
Apr 15 6:41 PM
 • 4'
 • 20
p
 • 0-1
izyuu
(2512)
+1.3
Garbanzo55
(1957)
-0.8

3 | 2
Atomic
Apr 15 6:39 PM
 • 2'
 • 9
p
 • 1-0
izyuu
(2510)
+1.3
Garbanzo55
(1958)
-0.8

3 | 2
Atomic
Apr 15 6:35 PM
 • 5'
 • 28
p
 • 0-1
izyuu
(2509)
+1.3
Garbanzo55
(1958)
-0.8

3 | 2
Atomic
Apr 15 6:31 PM
 • 2'
 • 12
p
 • 0-1
izyuu
(2509)
+0.1
oneklutch
(1533)
-0.1

3 | 2
Atomic
Apr 15 6:22 PM
 • 5'
 • 40
p
 • 1-0
izyuu
(2506)
+2.9
benigncyclops
(2115)
-2.5

3 | 2
Atomic
Apr 15 6:19 PM
 • 3'
 • 25
p
 • 0-1
izyuu
(2503)
+3.1
benigncyclops
(2118)
-2.5

3 | 2
Atomic
Apr 15 6:18 PM
 • 1'
 • 10
p
 • 1-0
izyuu
(2500)
+3.2
benigncyclops
(2120)
-2.6

3 | 2
Atomic
Apr 15 6:15 PM
 • 3'
 • 26
p
 • 0-1
izyuu
(2497)
+3.3
benigncyclops
(2123)
-2.7

3 | 2
Atomic
Apr 15 6:14 PM
 • 2'
 • 20
p
 • 1-0
izyuu
(2493)
+3.5
benigncyclops
(2126)
-2.8

3 | 2
Atomic
Apr 15 6:10 PM
 • 1'
 • 10
p
 • 1-0
izyuu
(2483)
+10.1
mbperini
(2358)
-10.8

3 | 2
Atomic
Apr 15 6:09 PM
 • 1'
 • 7
p
 • 0-1
izyuu
(2483)
+0.1
XenoIII
(1422)
-0.1

3 | 2
Atomic
Apr 15 6:08 PM
 • 2'
 • 21
p
 • 0-1
izyuu
(2482)
+1.2
Rafybob1
(1902)
-0.7

3 | 2
Atomic
Apr 15 6:01 PM
 • 6'
 • 53
p
 • 1-0
izyuu
(2478)
+4
Decker1515
(2132)
-2.7

3 | 2
Atomic
Apr 15 5:58 PM
 • 3'
 • 18
p
 • 0-1
izyuu
(2478)
+0.1
OrangeErikPlayz
(1441)
-0.1

3 | 2
Atomic
Apr 15 5:55 PM
 • 1'
 • 18
p
 • 0-1
izyuu
(2477)
+1
als4
(1864)
-0.5

3 | 2
Atomic
Apr 15 5:36 PM
 • 8'
 • 50
p
 • 1-0
Decker1515
(2113)
+19
izyuu
(2505)
-28.6

3 | 2
Atomic
Apr 15 5:32 PM
 • 4'
 • 40
p
 • 1-0
izyuu
(2502)
+3.3
Decker1515
(2116)
-2.2

3 | 2
Atomic
Apr 15 5:25 PM
 • 5'
 • 26
p
 • 1-0
Decker1515
(2096)
+19.3
izyuu
(2532)
-30

3 | 2
Atomic
Apr 15 5:20 PM
 • 5'
 • 38
p
 • 1-0
izyuu
(2529)
+2.7
Decker1515
(2098)
-1.8

3 | 2
Atomic
Apr 15 5:14 PM
 • 7'
 • 50
p
 • 0-1
izyuu
(2526)
+2.8
Decker1515
(2100)
-1.8

3 | 2
Atomic
Apr 15 4:43 PM
 • 1'
 • 11
p
 • 0-1
izyuu
(2526)
+0.1
heatstroke0
(1461)
-0.1

3 | 2
Atomic
Apr 14 6:27 PM
 • 5'
 • 29
p
 • 1-0
izyuu
(2524)
+2.3
Decker1515
(2059)
-1.5

3 | 2
Atomic
Apr 14 6:21 PM
 • 5'
 • 42
p
 • 0-1
izyuu
(2522)
+2.3
Decker1515
(2061)
-1.5

3 | 2
Atomic
Apr 14 6:14 PM
 • 5'
 • 24
p
 • 1-0
izyuu
(2519)
+2.4
Decker1515
(2062)
-1.5

3 | 2
Atomic
Apr 14 6:07 PM
 • 6'
 • 37
p
 • 0-1
izyuu
(2517)
+2.5
Decker1515
(2064)
-1.5

3 | 2
Atomic
Apr 14 6:03 PM
 • 4'
 • 25
p
 • 1-0
izyuu
(2514)
+2.5
Decker1515
(2065)
-1.5

3 | 2
Atomic
Apr 14 5:59 PM
 • 5'
 • 28
p
 • 0-1
izyuu
(2512)
+2.6
Decker1515
(2067)
-1.5

3 | 2
Atomic
Apr 14 5:49 PM
 • 9'
 • 91
p
 • ½-½
petarpirat
(2395)
+5.8
izyuu
(2517)
-5.4

3 | 2
Atomic
Apr 14 5:42 PM
 • 3'
 • 20
p
 • 0-1
izyuu
(2517)
+0.1
bath1w
(1500)
-0.2

3 | 2
Atomic
Apr 14 5:17 PM
 • 2'
 • 16
p
 • 1-0
izyuu
(2515)
+1.7
Channno
(1974)
-1

3 | 2
Atomic
Apr 14 5:13 PM
 • 4'
 • 20
p
 • 1-0
izyuu
(2515)
+0.1
samueltorf
(1500)
-0.2

3 | 2
Atomic
Apr 14 5:10 PM
 • 3'
 • 27
p
 • 0-1
izyuu
(2515)
+0.2
jcrivesss
(1518)
-0.2

3 | 2
Atomic
Apr 12 6:52 PM
 • 5'
 • 28
p
 • 0-1
izyuu
(2514)
+1.4
Garbanzo55
(1939)
-0.7

3 | 2
Atomic
Apr 12 6:44 PM
 • 7'
 • 71
p
 • 0-1
izyuu
(2507)
+6.3
New-To-Chesss
(2231)
-4.9

3 | 2
Atomic
Apr 12 6:21 PM
 • 7'
 • 42
p
 • 0-1
izyuu
(2505)
+2.2
Decker1515
(2015)
-1.3

3 | 2
Atomic
Apr 12 6:16 PM
 • 5'
 • 41
p
 • 1-0
izyuu
(2503)
+2.3
Decker1515
(2016)
-1.3

3 | 2
Atomic
Apr 12 6:10 PM
 • 7'
 • 37
p
 • 0-1
izyuu
(2500)
+2.3
Decker1515
(2018)
-1.3

3 | 2
Atomic
Apr 12 6:31 AM
 • 5'
 • 31
p
 • 0-1
izyuu
(2500)
+0.4
lawofthewest
(1689)
-0.2

3 | 2
Atomic
Apr 7 7:47 PM
 • 4'
 • 41
p
 • 0-1
izyuu
(2500)
+0.1
Granimalia
(1426)
-0.1

3 | 2
Atomic
Apr 7 7:45 PM
 • 1'
 • 10
p
 • 0-1
izyuu
(2500)
+0.1
MorrisSucksAtChess
(1404)
-0.1

3 | 2
Atomic
Apr 7 7:44 PM
 • 2'
 • 18
p
 • 0-1
izyuu
(2500)
+0.3
tootsieroll3
(1650)
-0.1

3 | 2
Atomic
Apr 7 7:42 PM
 • 3'
 • 29
p
 • 1-0
izyuu
(2499)
+0.1
DrClows
(1521)
-0.1

3 | 2
Atomic
Apr 7 7:41 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2499)
+0.1
TestChess58224
(1460)
-0.1

3 | 2
Atomic
Apr 7 11:36 AM
 • 3'
 • 22
p
 • 0-1
izyuu
(2499)
+0.1
Leo9590
(1491)
-0.2

3 | 2
Atomic
Apr 7 11:33 AM
 • 4'
 • 30
p
 • 1-0
izyuu
(2498)
+1.1
Mr_Indigestible
(1881)
-0.6

3 | 2
Atomic
Apr 7 11:18 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2498)
+0.2
JoshT1523
(1503)
-0.2

3 | 2
Atomic
Apr 7 11:00 AM
 • 9'
 • 75
p
 • 1-0
Decker1515
(2079)
+19.5
izyuu
(2530)
-32.2

3 | 2
Atomic
Apr 7 10:56 AM
 • 4'
 • 31
p
 • 0-1
izyuu
(2530)
+0.4
MMorley
(1715)
-0.4

3 | 2
Atomic
Apr 7 10:51 AM
 • 6'
 • 52
p
 • 1-0
izyuu
(2529)
+0.4
MMorley
(1716)
-0.4

3 | 2
Atomic
Apr 7 6:15 AM
 • 5'
 • 40
p
 • 0-1
izyuu
(2521)
+8.9
TeamTimeAttack
(2331)
-3.8

3 | 2
Atomic
Apr 7 6:10 AM
 • 6'
 • 43
p
 • 1-0
izyuu
(2511)
+9.9
TeamTimeAttack
(2335)
-4

3 | 2
Atomic
Apr 7 6:02 AM
 • 7'
 • 35
p
 • 0-1
izyuu
(2510)
+0.7
mankhustk65
(1809)
-0.4

3 | 2
Atomic
Apr 7 5:56 AM
 • 2'
 • 17
p
 • 1-0
izyuu
(2510)
+0.1
gusrobertsonegg
(1462)
-0.1

3 | 2
Atomic
Apr 7 5:55 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2510)
+0.1
yaboyfrosty44
(1481)
-0.2

3 | 2
Atomic
Apr 7 5:48 AM
 • 2'
 • 15
p
 • 1-0
izyuu
(2509)
+0.2
Carlgamin
(1500)
-0.2

3 | 2
Atomic
Apr 7 5:46 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(2509)
+0.2
potatoaloobhujia
(1551)
-0.2

3 | 2
Atomic
Apr 7 5:46 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2509)
+0.2
potatoaloobhujia
(1552)
-0.2

3 | 2
Atomic
Apr 7 5:42 AM
 • 1'
 • 10
p
 • 0-1
izyuu
(2509)
+0.3
Michlop
(1681)
-0.2

3 | 2
Atomic
Apr 7 5:39 AM
 • 3'
 • 16
p
 • 0-1
izyuu
(2508)
+0.4
sahilisabeast
(1704)
-0.2

3 | 2
Atomic
Apr 7 5:36 AM
 • 4'
 • 36
p
 • 1-0
izyuu
(2506)
+2.1
shortlight
(2008)
-1.4

3 | 2
Atomic
Apr 7 5:34 AM
 • 2'
 • 12
p
 • 1-0
izyuu
(2505)
+1.1
Atanat1234
(1898)
-0.6

3 | 2
Atomic
Apr 7 5:33 AM
 • 1'
 • 4
p
 • 0-1
izyuu
(2505)
+0.1
Cristian_not_found
(1438)
-0.1

3 | 2
Atomic
Apr 6 11:34 AM
 • 1'
 • 4
p
 • 0-1
izyuu
(2505)
+0.2
suvam_buddylov
(1500)
-0.2

3 | 2
Atomic
Apr 6 11:32 AM
 • 1'
 • 11
p
 • 1-0
izyuu
(2505)
+0.2
suvam_buddylov
(1500)
-0.2

3 | 2
Atomic
Apr 6 11:29 AM
 • 3'
 • 16
p
 • 0-1
izyuu
(2503)
+1.8
capttax
(1985)
-0.9

3 | 2
Atomic
Apr 6 11:25 AM
 • 3'
 • 27
p
 • 1-0
izyuu
(2503)
+0.1
Moodle1
(1491)
-0.1

3 | 2
Atomic
Apr 6 11:23 AM
 • 1'
 • 12
p
 • 0-1
izyuu
(2503)
+0.1
Ekkertheekker
(1444)
-0.1

3 | 2
Atomic
Apr 6 11:22 AM
 • 1'
 • 9
p
 • 1-0
izyuu
(2503)
+0.1
venomouscrayon321
(1500)
-0.2

3 | 2
Atomic
Apr 6 11:17 AM
 • 4'
 • 39
p
 • 1-0
Destroy06
(1426)
+40.1
izyuu
(2535)
-32.8

3 | 2
Atomic
Apr 6 9:11 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2535)
+0.1
milobarrosograziano
(1419)
+0

3 | 2
Atomic
Apr 6 7:47 AM
 • 7'
 • 33
p
 • 0-1
izyuu
(2531)
+4.6
Tyler329
(2205)
-3.4

3 | 2
Atomic
Apr 6 7:43 AM
 • 4'
 • 40
p
 • 1-0
izyuu
(2526)
+4.9
Tyler329
(2208)
-3.5

3 | 2
Atomic
Apr 6 7:40 AM
 • 4'
 • 32
p
 • 0-1
izyuu
(2521)
+5.2
Tyler329
(2212)
-3.7

3 | 2
Atomic
Apr 5 9:16 AM
 • 1'
 • 6
p
 • 0-1
izyuu
(2521)
+0.1
Rocketman38
(1473)
-0.1

3 | 2
Atomic
Apr 5 9:15 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2521)
+0.1
Samudra_chessmaster
(1375)
-0.1

3 | 2
Atomic
Apr 5 8:17 AM
 • 6'
 • 50
p
 • 0-1
izyuu
(2520)
+0.6
jacobear
(1797)
-0.3

3 | 2
Atomic
Apr 5 8:16 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2519)
+0.6
jacobear
(1797)
-0.3

3 | 2
Atomic
Apr 5 8:10 AM
 • 2'
 • 23
p
 • 0-1
izyuu
(2519)
+0.1
Sax3na
(1551)
-0.1

3 | 2
Atomic
Apr 5 7:57 AM
 • 7'
 • 49
p
 • 1-0
izyuu
(2516)
+3.3
AtomicandWeed
(2119)
-2.3

3 | 2
Atomic
Apr 5 7:53 AM
 • 4'
 • 36
p
 • 0-1
izyuu
(2516)
+0.3
The-Machine-13
(1700)
-0.2

3 | 2
Atomic
Apr 5 7:51 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2515)
+0.3
Miha2258
(1670)
-0.1

3 | 2
Atomic
Apr 5 7:50 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2515)
+0.6
Txt8x8
(1798)
-0.3

3 | 2
Atomic
Apr 5 7:44 AM
 • 6'
 • 38
p
 • 0-1
izyuu
(2514)
+0.5
deathcoresniper
(1757)
-0.2

3 | 2
Atomic
Apr 5 7:43 AM
 • 2'
 • 24
p
 • 0-1
izyuu
(2514)
+0.2
BlueMoonVampire
(1574)
-0.1

3 | 2
Atomic
Apr 5 6:13 AM
 • 4'
 • 32
p
 • 0-1
izyuu
(2514)
+0.1
steeveeenc
(1425)
-0.1

3 | 2
Atomic
Apr 5 6:07 AM
 • 2'
 • 16
p
 • 0-1
izyuu
(2514)
+0.1
lukemunro2
(1505)
-0.2

3 | 2
Atomic
Apr 5 6:06 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(2514)
+0.1
GavinW2009
(1455)
-0.1

3 | 2
Atomic
Apr 4 8:42 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2514)
+0.2
Korycoh
(1610)
-0.1

3 | 2
Atomic
Apr 3 2:34 PM
 • 3'
 • 22
p
 • 1-0
izyuu
(2513)
+0.7
HayThomas
(1835)
-0.4

3 | 2
Explosive Fight
Apr 3 9:11 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2513)
+0.1
Mr_Onions
(1540)
-0.2

3 | 2
Explosive Fight
Apr 3 9:08 AM
 • 2'
 • 18
p
 • 0-1
izyuu
(2510)
+2.9
Letan-29
(2107)
-2.2

3 | 2
Explosive Fight
Apr 3 9:06 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2510)
+0.1
Mr_Onions
(1524)
-0.2

3 | 2
Explosive Fight
Apr 3 8:59 AM
 • 6'
 • 57
p
 • 1-0
izyuu
(2507)
+3
Letan-29
(2108)
-2.2

3 | 2
Explosive Fight
Apr 3 8:59 AM
 • 1'
 • 4
p
 • 0-1
izyuu
(2507)
+0.2
M4tusino
(1614)
-0.1

3 | 2
Explosive Fight
Apr 3 8:55 AM
 • 3'
 • 29
p
 • 1-0
izyuu
(2506)
+0.1
Asap_beast21
(1518)
-0.2

3 | 2
Explosive Fight
Apr 3 8:54 AM
 • 2'
 • 13
p
 • 1-0
izyuu
(2506)
+0.1
J4tekchess
(1500)
-0.2

3 | 2
Explosive Fight
Apr 3 8:47 AM
 • 6'
 • 53
p
 • 0-1
izyuu
(2503)
+2.9
Letan-29
(2107)
-2.1

3 | 2
Explosive Fight
Apr 3 8:45 AM
 • 1'
 • 4
p
 • 0-1
izyuu
(2503)
+0.1
garccris
(1500)
-0.2

3 | 2
Explosive Fight
Apr 3 8:45 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2503)
+0.1
VictorBee18
(1497)
-0.1

3 | 2
Explosive Fight
Apr 3 8:44 AM
 • 1'
 • 6
p
 • 0-1
izyuu
(2503)
+0.1
Trevizer
(1500)
-0.2

3 | 2
Explosive Fight
Apr 3 8:39 AM
 • 5'
 • 53
p
 • 1-0
izyuu
(2500)
+3.2
Letan-29
(2124)
-2.3

3 | 2
Atomic
Apr 1 6:47 PM
 • 6'
 • 46
p
 • 1-0
izyuu
(2494)
+5.5
cmfps
(2232)
-3.7

3 | 2
Atomic
Apr 1 6:47 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2494)
+0.1
Sonikixx
(1385)
+0

3 | 2
Atomic
Apr 1 6:46 PM
 • 1'
 • 6
p
 • 1-0
izyuu
(2494)
+0.2
iBarwanii
(1552)
-0.2

3 | 2
Atomic
Apr 1 6:40 PM
 • 6'
 • 36
p
 • 0-1
izyuu
(2494)
+0.1
broc19
(1436)
-0.1

3 | 2
Atomic
Apr 1 6:39 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2494)
+0.2
rhombicosidodecahedron12
(1619)
-0.1

3 | 2
Explosive Masters
Mar 31 3:07 PM
 • 4'
 • 17
p
 • 0-1
izyuu
(2491)
+3.1
greendeer25
(2114)
-2.5

3 | 2
Explosive Masters
Mar 31 2:57 PM
 • 7'
 • 52
p
 • 0-1
izyuu
(2484)
+7.1
anonymous584
(2285)
-5.8

3 | 2
Explosive Masters
Mar 31 2:48 PM
 • 4'
 • 50
p
 • 0-1
izyuu
(2478)
+5.8
chrisbill03
(2224)
-4.7

3 | 2
Explosive Masters
Mar 31 2:40 PM
 • 6'
 • 77
p
 • 1-0
izyuu
(2470)
+8.1
anonymous584
(2286)
-6.4

3 | 2
Atomic
Mar 31 2:38 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(2470)
+0.1
farisrahim
(1470)
-0.1

3 | 2
Explosive Masters
Mar 31 2:27 PM
 • 1'
 • 13
p
 • 1-0
izyuu
(2469)
+0.9
PenAddict11
(1836)
-0.5

3 | 2
Atomic
Mar 31 10:57 AM
 • 2'
 • 16
p
 • 0-1
izyuu
(2469)
+0.1
TempestReal
(1507)
-0.1

3 | 2
Atomic
Mar 31 8:17 AM
 • 4'
 • 36
p
 • 1-0
izyuu
(2457)
+11.1
Wumeatsyourking
(2359)
-14

3 | 2
Atomic
Mar 31 8:11 AM
 • 5'
 • 34
p
 • 1-0
izyuu
(2449)
+8
Freddioso
(2251)
-4.2

3 | 2
Atomic
Mar 31 8:10 AM
 • 1'
 • 6
p
 • 0-1
izyuu
(2449)
+0.1
wiktoridziaszek
(1468)
-0.1

3 | 2
Atomic
Mar 31 8:10 AM
 • 1'
 • 10
p
 • 0-1
izyuu
(2449)
+0.2
CheckmateSquadron
(1495)
-0.1

3 | 2
Atomic
Mar 31 6:14 AM
 • 6'
 • 52
p
 • 1-0
JustLogic15
(2243)
+21.4
izyuu
(2475)
-25.6

3 | 2
Atomic
Mar 31 6:13 AM
 • 2'
 • 18
p
 • 1-0
izyuu
(2467)
+7.8
JustLogic15
(2250)
-6.5

3 | 2
Atomic
Mar 31 5:43 AM
 • 4'
 • 24
p
 • 1-0
izyuu
(2465)
+2
Superfly87
(1957)
-1.1

3 | 2
Atomic
Mar 31 5:42 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2465)
+0.2
pawn_for_the_wins
(1494)
-0.1

3 | 2
Atomic
Mar 30 7:54 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2465)
+0.2
MrChessBotSir1
(1505)
-0.2

3 | 2
Atomic
Mar 30 7:53 PM
 • 2'
 • 18
p
 • 0-1
izyuu
(2464)
+0.2
ajayjoban
(1499)
-0.3

3 | 2
Atomic
Mar 30 7:10 PM
 • 4'
 • 29
p
 • 1-0
izyuu
(2464)
+0.7
dentheaddurz
(1779)
-0.3

3 | 2
Atomic
Mar 30 7:08 PM
 • 2'
 • 16
p
 • 0-1
izyuu
(2464)
+0.2
ZombieGun2007
(1511)
-0.1

3 | 2
Atomic
Mar 30 7:05 PM
 • 3'
 • 13
p
 • 0-1
izyuu
(2463)
+0.1
neihao
(1400)
-0.1

3 | 2
Atomic
Mar 30 7:05 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2463)
+0.3
CptTeabag
(1609)
-0.1

3 | 2
Atomic
Mar 30 7:03 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(2463)
+0.2
arhaannotsus
(1531)
-0.1

3 | 2
Atomic
Mar 30 7:01 PM
 • 2'
 • 11
p
 • 1-0
izyuu
(2463)
+0.2
Systematicxx
(1554)
-0.1

3 | 2
Atomic
Mar 30 6:59 PM
 • 2'
 • 21
p
 • 1-0
izyuu
(2463)
+0.3
louistcardi
(1609)
-0.1

3 | 2
Atomic
Mar 30 6:59 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2462)
+0.2
averykoblitz
(1545)
-0.2

3 | 2
Atomic
Mar 30 6:57 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(2462)
+0.1
HiHiHiHi1568
(1490)
-0.2

3 | 2
Atomic
Mar 30 6:57 PM
 • 1'
 • 13
p
 • 1-0
izyuu
(2462)
+0.1
Tatortots123
(1461)
-0.1

3 | 2
Atomic
Mar 30 6:56 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2462)
+0.1
Tatortots123
(1461)
-0.1

3 | 2
Atomic
Mar 30 12:07 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2462)
+0.1
hades234234
(1466)
-0.1

3 | 2
Atomic
Mar 30 11:44 AM
 • 9'
 • 106
p
 • 1-0
izyuu
(2451)
+11
FootSniffers
(2347)
-6.2

3 | 2
Atomic
Mar 30 11:38 AM
 • 4'
 • 17
p
 • 0-1
izyuu
(2451)
+0.1
SunChipsTM
(1488)
-0.1

3 | 2
Atomic
Mar 30 10:30 AM
 • 5'
 • 66
p
 • 0-1
izyuu
(2442)
+8.5
Tbosson
(2262)
-4.3

3 | 2
Explosive Fight
Mar 30 10:24 AM
 • 3'
 • 18
p
 • 0-1
izyuu
(2442)
+0.7
DestroyerDJ3
(1749)
-0.3

3 | 2
Explosive Fight
Mar 30 9:24 AM
 • 1'
 • 10
p
 • 0-1
izyuu
(2441)
+0.3
DOm2ahh
(1580)
-0.1

3 | 2
Explosive Fight
Mar 30 9:23 AM
 • 1'
 • 8
p
 • 1-0
izyuu
(2441)
+0.2
guguzzai
(1517)
-0.2

3 | 2
Explosive Fight
Mar 30 9:16 AM
 • 7'
 • 68
p
 • ½-½
izyuu
(2438)
+2.8
M2U7I9I6
(2504)
-2.8

3 | 2
Atomic
Mar 30 9:10 AM
 • 6'
 • 53
p
 • 0-1
izyuu
(2429)
+9.6
thehenryg
(2261)
-4.5

3 | 2
Atomic
Mar 30 8:44 AM
 • 5'
 • 30
p
 • 0-1
izyuu
(2426)
+2.8
derpypickl
(1982)
-1.7

3 | 2
Atomic
Mar 30 8:37 AM
 • 3'
 • 18
p
 • 0-1
izyuu
(2426)
+0.1
Gman2120
(1429)
-0.1

3 | 2
Atomic
Mar 30 8:04 AM
 • 3'
 • 24
p
 • 1-0
izyuu
(2415)
+11.2
SantaMozzarella
(2272)
-5.9

3 | 2
Atomic
Mar 30 7:50 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2414)
+0.2
Rordeez
(1482)
-0.2

3 | 2
Atomic
Mar 30 7:48 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2414)
+0.3
nguyenzanhminh
(1500)
-0.3

3 | 2
Atomic
Mar 30 7:33 AM
 • 1'
 • 5
p
 • 0-1
izyuu
(2413)
+0.8
dashelmiltz
(1732)
-0.4

3 | 2
Atomic
Mar 30 7:17 AM
 • 1'
 • 5
p
 • 0-1
izyuu
(2413)
+0.2
ryo_sama9
(1477)
-0.3

3 | 2
Atomic
Mar 30 7:08 AM
 • 7'
 • 65
p
 • 1-0
izyuu
(2408)
+5
NotaBotlukas10
(2077)
-2.9

3 | 2
Atomic
Mar 30 7:06 AM
 • 2'
 • 12
p
 • 1-0
izyuu
(2408)
+0.2
peanuts221
(1442)
-0.1

3 | 2
Atomic
Mar 30 7:03 AM
 • 3'
 • 26
p
 • 0-1
izyuu
(2408)
+0.2
MarvelousWin
(1494)
-0.2

3 | 2
Atomic
Mar 30 7:02 AM
 • 2'
 • 18
p
 • 0-1
izyuu
(2407)
+0.3
Kosinusfunktion
(1545)
-0.3

3 | 2
Atomic
Mar 30 7:01 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(2407)
+0.1
zacharydamon123
(1405)
-0.1

3 | 2
Atomic
Mar 30 7:01 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2407)
+0.2
KETRAB2052
(1497)
-0.3

3 | 2
Atomic
Mar 30 6:48 AM
 • 4'
 • 26
p
 • 0-1
izyuu
(2407)
+0.3
Klavierschach
(1500)
-0.4

3 | 2
Atomic
Mar 30 6:47 AM
 • 1'
 • 9
p
 • 1-0
izyuu
(2407)
+0.1
Destroyerthe1st
(1391)
-0.1

3 | 2
Atomic
Mar 30 6:43 AM
 • 4'
 • 29
p
 • 0-1
izyuu
(2406)
+1
ELMESAS-Tw
(1768)
-0.5

3 | 2
Atomic
Mar 30 6:42 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2406)
+0.2
Davidthedestroier
(1428)
-0.2

3 | 2
Atomic
Mar 30 6:42 AM
 • 1'
 • 10
p
 • 0-1
izyuu
(2405)
+0.1
Golem_Desaster
(1411)
-0.1

3 | 2
Atomic
Mar 30 6:41 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2405)
+0.2
CupOfLean
(1462)
-0.2

3 | 2
Atomic
Mar 30 6:40 AM
 • 2'
 • 16
p
 • 0-1
izyuu
(2405)
+0.4
Fish240
(1608)
-0.2

3 | 2
Atomic
Mar 30 6:34 AM
 • 2'
 • 9
p
 • 1-0
izyuu
(2405)
+0.2
Tjungg
(1491)
-0.2

3 | 2
Atomic
Mar 30 6:33 AM
 • 1'
 • 14
p
 • 0-1
izyuu
(2404)
+0.2
tung148
(1479)
-0.2

3 | 2
Atomic
Mar 30 5:37 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2404)
+0.1
kade1101
(1413)
-0.2

3 | 2
Atomic
Mar 29 11:36 AM
 • 3'
 • 14
p
 • 0-1
izyuu
(2404)
+0.2
GamerPlayer1235
(1449)
-0.2

3 | 2
Atomic
Mar 29 11:28 AM
 • 6'
 • 36
p
 • 0-1
izyuu
(2403)
+0.7
Verelion
(1723)
-0.4

3 | 2
Atomic
Mar 29 11:26 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2403)
+0.3
lucaspeters3
(1587)
-0.2

3 | 2
Atomic
Mar 29 11:19 AM
 • 4'
 • 25
p
 • 0-1
izyuu
(2402)
+0.5
s1jjl
(1683)
-0.3

3 | 2
Atomic
Mar 29 11:19 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2402)
+0.2
Derlaczek
(1502)
-0.3

3 | 2
Atomic
Mar 29 11:18 AM
 • 1'
 • 9
p
 • 1-0
izyuu
(2402)
+0.4
Redmasterbuilder
(1632)
-0.2

3 | 2
Atomic
Mar 29 11:17 AM
 • 2'
 • 13
p
 • 1-0
izyuu
(2402)
+0.4
BatM07
(1608)
-0.2

3 | 2
Atomic
Mar 29 11:05 AM
 • 4'
 • 30
p
 • 0-1
izyuu
(2401)
+0.2
aydenhundley
(1480)
-0.1

3 | 2
Atomic
Mar 29 11:05 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2401)
+0.2
kiralymate8
(1503)
-0.2

3 | 2
Atomic
Mar 29 11:02 AM
 • 3'
 • 18
p
 • 0-1
izyuu
(2401)
+0.2
UnNainC0nnu
(1488)
-0.1

3 | 2
Atomic
Mar 29 10:59 AM
 • 3'
 • 24
p
 • 0-1
izyuu
(2401)
+0.1
OnXD
(1456)
-0.1

3 | 2
Atomic
Mar 29 10:51 AM
 • 6'
 • 51
p
 • 0-1
izyuu
(2394)
+6.8
pawnytales
(2179)
-6.9

1 | 5
Atomic
Mar 29 9:17 AM
 • 3'
 • 33
p
 • 1-0
izyuu
(2394)
+0.4
OfficerJohn1
(1641)
-0.3

3 | 2
Atomic
Mar 29 9:06 AM
 • 6'
 • 37
p
 • 0-1
izyuu
(2389)
+5
berniejw
(2101)
-2.4

3 | 2
Atomic
Mar 29 9:05 AM
 • 2'
 • 16
p
 • 0-1
izyuu
(2388)
+0.2
MilesEE
(1487)
-0.2

3 | 2
Atomic
Mar 29 9:05 AM
 • 1'
 • 6
p
 • 0-1
izyuu
(2388)
+0.2
aayushchebolu
(1474)
-0.1

3 | 2
Atomic
Mar 29 8:55 AM
 • 4'
 • 45
p
 • 0-1
izyuu
(2386)
+2.2
Muyuan001
(1937)
-1.3

3 | 2
Atomic
Mar 29 8:51 AM
 • 4'
 • 29
p
 • 1-0
izyuu
(2386)
+0.2
nokkywokky
(1448)
-0.1

3 | 2
Atomic
Mar 29 8:47 AM
 • 4'
 • 26
p
 • 0-1
izyuu
(2386)
+0.2
Muzq_P
(1472)
-0.1

3 | 2
Atomic
Mar 29 8:41 AM
 • 5'
 • 36
p
 • 0-1
izyuu
(2383)
+2.6
XxRookmanxX
(1966)
-1.8

3 | 2
Atomic
Mar 29 8:36 AM
 • 6'
 • 40
p
 • 1-0
izyuu
(2382)
+1.1
mankhustk65
(1799)
-0.7

3 | 2
Atomic
Mar 29 8:32 AM
 • 3'
 • 5
p
 • 1-0
izyuu
(2382)
+0.1
octopus223
(1346)
-0.1

3 | 2
Atomic
Mar 29 8:31 AM
 • 1'
 • 9
p
 • 0-1
izyuu
(2382)
+0.1
benstammeyer
(1439)
-0.1

3 | 2
Atomic
Mar 29 8:30 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2382)
+0.2
CheeseCookie
(1500)
-0.4

3 | 2
Atomic
Mar 29 8:29 AM
 • 1'
 • 9
p
 • 1-0
izyuu
(2381)
+0.2
kevters33
(1481)
-0.1

3 | 2
Atomic
Mar 29 8:28 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2381)
+0.2
kamsiyonnaonyia
(1532)
-0.1

3 | 2
Atomic
Mar 29 8:27 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2381)
+0.2
jamie_dar
(1479)
-0.3

3 | 2
Atomic
Mar 29 8:12 AM
 • 7'
 • 58
p
 • 0-1
izyuu
(2378)
+2.5
XxRookmanxX
(1972)
-1.9

3 | 2
Atomic
Mar 29 8:11 AM
 • 1'
 • 9
p
 • 1-0
izyuu
(2376)
+2.6
XxRookmanxX
(1974)
-1.9

3 | 2
Atomic
Mar 29 8:09 AM
 • 2'
 • 18
p
 • 0-1
izyuu
(2373)
+2.7
XxRookmanxX
(1976)
-1.9

3 | 2
Atomic
Mar 29 8:05 AM
 • 4'
 • 32
p
 • 1-0
izyuu
(2370)
+3
PotatoJames36
(1994)
-2.1

3 | 2
Atomic
Mar 29 8:02 AM
 • 1'
 • 12
p
 • 0-1
izyuu
(2370)
+0.2
tt132008
(1477)
-0.1

3 | 2
Atomic
Mar 29 8:01 AM
 • 1'
 • 8
p
 • 1-0
izyuu
(2370)
+0.2
masoncoones
(1463)
-0.1

3 | 2
Atomic
Mar 29 7:57 AM
 • 2'
 • 30
p
 • 0-1
izyuu
(2369)
+0.2
5starjaxzyl
(1512)
-0.1

3 | 2
Atomic
Mar 29 7:55 AM
 • 1'
 • 12
p
 • 0-1
izyuu
(2369)
+0.2
kamsiyonnaonyia
(1520)
-0.1

3 | 2
Atomic
Mar 29 7:52 AM
 • 2'
 • 21
p
 • 1-0
izyuu
(2369)
+0.2
Phantomgodz
(1470)
-0.1

3 | 2
Atomic
Mar 29 7:50 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2369)
+0.1
BallOfSteel
(1425)
-0.1

3 | 2
Atomic
Mar 29 7:48 AM
 • 2'
 • 19
p
 • 0-1
izyuu
(2369)
+0.3
a1bro
(1561)
-0.3

3 | 2
Atomic
Mar 29 7:45 AM
 • 3'
 • 22
p
 • 0-1
izyuu
(2368)
+0.4
BolasUlamog
(1629)
-0.2

3 | 2
Atomic
Mar 29 7:44 AM
 • 2'
 • 7
p
 • 1-0
izyuu
(2368)
+0.3
ElJo6th
(1547)
-0.4

3 | 2
Atomic
Mar 29 7:44 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2368)
+0.3
IamOnFireSeriusly
(1562)
-0.2

3 | 2
Atomic
Mar 29 7:34 AM
 • 5'
 • 43
p
 • 1-0
izyuu
(2367)
+0.9
jacobear
(1788)
-0.6

3 | 2
Atomic
Mar 29 6:17 AM
 • 2'
 • 25
p
 • 1-0
izyuu
(2367)
+0.2
Z0RTH
(1518)
-0.1

3 | 2
Atomic
Mar 29 6:17 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2366)
+0.2
Z0RTH
(1518)
-0.1

3 | 2
Atomic
Mar 29 6:16 AM
 • 1'
 • 4
p
 • 0-1
izyuu
(2366)
+0.2
blikbier123
(1500)
-0.4

3 | 2
Atomic
Mar 29 6:16 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2366)
+0.1
dunderkillen123
(1399)
-0.2

3 | 2
Atomic
Mar 29 6:16 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2366)
+0.1
dunderkillen123
(1399)
-0.2

3 | 2
Atomic
Mar 29 5:59 AM
 • 9'
 • 95
p
 • ½-½
M2U7I9I6
(2505)
-5.4
izyuu
(2362)
+4.2

3 | 2
Atomic
Mar 29 5:50 AM
 • 8'
 • 85
p
 • 1-0
izyuu
(2345)
+16.7
M2U7I9I6
(2527)
-21.5

3 | 2
Atomic
Mar 29 5:43 AM
 • 5'
 • 36
p
 • 0-1
izyuu
(2343)
+1.6
SamStudly
(1883)
-1.2

3 | 2
Atomic
Mar 29 5:39 AM
 • 4'
 • 25
p
 • 0-1
izyuu
(2342)
+1.4
The-Die-Is-Cast
(1845)
-1.1

3 | 2
Atomic
Mar 29 5:37 AM
 • 3'
 • 16
p
 • 1-0
izyuu
(2341)
+1.4
The-Die-Is-Cast
(1846)
-1.1

3 | 2
Atomic
Mar 29 5:34 AM
 • 3'
 • 18
p
 • 0-1
izyuu
(2339)
+1.4
The-Die-Is-Cast
(1847)
-1.1

3 | 2
Atomic
Mar 29 5:32 AM
 • 3'
 • 32
p
 • 1-0
izyuu
(2338)
+1.4
The-Die-Is-Cast
(1848)
-1.1

3 | 2
Atomic
Mar 28 8:55 PM
 • 7'
 • 84
p
 • 1-0
TeamTimeAttack
(2024)
+20.1
izyuu
(2358)
-19.7

3 | 2
Atomic
Mar 28 8:49 PM
 • 6'
 • 55
p
 • 1-0
izyuu
(2355)
+3.2
TeamTimeAttack
(2027)
-3.2

3 | 2
Atomic
Mar 28 8:29 PM
 • 2'
 • 20
p
 • 1-0
izyuu
(2351)
+3.7
benigncyclops
(2053)
-2.8

3 | 2
Atomic
Mar 28 8:25 PM
 • 4'
 • 27
p
 • 0-1
izyuu
(2347)
+3.8
benigncyclops
(2056)
-2.9

3 | 2
Atomic
Mar 28 8:24 PM
 • 2'
 • 14
p
 • 1-0
izyuu
(2343)
+4
benigncyclops
(2059)
-3

3 | 2
Atomic
Mar 28 8:21 PM
 • 3'
 • 23
p
 • 0-1
izyuu
(2339)
+4.2
benigncyclops
(2062)
-3.1

3 | 2
Atomic
Mar 28 8:17 PM
 • 3'
 • 20
p
 • 1-0
izyuu
(2335)
+4.4
benigncyclops
(2066)
-3.2

3 | 2
Atomic
Mar 28 8:17 PM
 • 1'
 • 1
p
 • ½-½
benigncyclops
(2060)
+5.8
izyuu
(2343)
-8.1

3 | 2
Atomic
Mar 28 8:12 PM
 • 5'
 • 27
p
 • 0-1
izyuu
(2341)
+4.3
benigncyclops
(2063)
-3.1

3 | 2
Atomic
Mar 28 8:00 PM
 • 11'
 • 136
p
 • ½-½
izyuu
(2350)
-8.5
benigncyclops
(2057)
+5.9

3 | 2
Atomic
Mar 28 7:58 PM
 • 3'
 • 19
p
 • 0-1
izyuu
(2346)
+4.2
benigncyclops
(2060)
-3

3 | 2
Atomic
Mar 28 7:54 PM
 • 3'
 • 21
p
 • 1-0
izyuu
(2341)
+4.4
benigncyclops
(2063)
-3.1

3 | 2
Atomic
Mar 28 7:54 PM
 • 1'
 • 1
p
 • ½-½
benigncyclops
(2057)
+5.8
izyuu
(2350)
-8.8

3 | 2
Atomic
Mar 28 7:47 PM
 • 7'
 • 43
p
 • 1-0
izyuu
(2346)
+4.4
benigncyclops
(2060)
-2.9

3 | 2
Atomic
Mar 28 7:46 PM
 • 1'
 • 7
p
 • 0-1
izyuu
(2341)
+4.7
benigncyclops
(2063)
-3

3 | 2
Atomic
Mar 28 7:37 PM
 • 5'
 • 18
p
 • 1-0
izyuu
(2336)
+4.9
benigncyclops
(2066)
-3.2

3 | 2
Atomic
Mar 28 7:31 PM
 • 5'
 • 35
p
 • 0-1
izyuu
(2331)
+5.3
benigncyclops
(2070)
-3.3

3 | 2
Atomic
Mar 28 7:20 PM
 • 6'
 • 32
p
 • 1-0
izyuu
(2325)
+5.6
benigncyclops
(2073)
-3.4

3 | 2
Atomic
Mar 28 7:17 PM
 • 2'
 • 21
p
 • 0-1
izyuu
(2319)
+6
benigncyclops
(2077)
-3.6

3 | 2
Atomic
Mar 28 7:16 PM
 • 2'
 • 14
p
 • 0-1
izyuu
(2319)
+0.2
SofaXKing33
(1435)
-0.3

3 | 2
Atomic
Mar 28 7:12 PM
 • 3'
 • 26
p
 • 0-1
izyuu
(2315)
+4.2
justheretoplayches
(1991)
-2.1

3 | 2
Atomic
Mar 28 7:07 PM
 • 6'
 • 42
p
 • 0-1
izyuu
(2312)
+2.4
Nairraider
(1879)
-1.4

3 | 2
Atomic
Mar 28 7:06 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2312)
+0.3
Qasusen
(1499)
-0.3

3 | 2
Atomic
Mar 28 7:06 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2312)
+0.4
EL_OCHO_NEGRO
(1500)
-0.6

3 | 2
Atomic
Mar 28 6:57 PM
 • 3'
 • 28
p
 • 0-1
izyuu
(2310)
+1.5
EcIipsed
(1783)
-0.8

3 | 2
Atomic
Mar 28 6:48 PM
 • 8'
 • 49
p
 • 0-1
izyuu
(2298)
+11.9
sgco
(2227)
-9.5

3 | 2
Atomic
Mar 28 6:42 PM
 • 4'
 • 34
p
 • 1-0
izyuu
(2298)
+0.5
PTSD_guy69420
(1571)
-0.3

3 | 2
Atomic
Mar 28 6:40 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2297)
+0.5
TechoFIash
(1550)
-0.6

3 | 2
Atomic
Mar 28 6:40 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2297)
+0.7
benjamin_edwards
(1623)
-0.4

3 | 2
Atomic
Mar 28 6:39 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2296)
+0.4
JamesT1776
(1494)
-0.5

3 | 2
Atomic
Mar 28 6:31 PM
 • 6'
 • 39
p
 • 0-1
izyuu
(2292)
+4.4
NamelessPro
(1975)
-2.6

3 | 2
Atomic
Mar 28 6:29 PM
 • 3'
 • 31
p
 • 0-1
izyuu
(2285)
+7.3
benigncyclops
(2074)
-4.3

3 | 2
Atomic
Mar 28 6:27 PM
 • 2'
 • 18
p
 • 1-0
izyuu
(2277)
+7.9
benigncyclops
(2079)
-4.5

3 | 2
Atomic
Mar 28 6:25 PM
 • 2'
 • 17
p
 • 0-1
izyuu
(2268)
+8.7
benigncyclops
(2084)
-4.8

3 | 2
Atomic
Mar 28 6:24 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2267)
+0.6
GmDerRiese
(1523)
-0.8

3 | 2
Atomic
Mar 28 6:22 PM
 • 3'
 • 27
p
 • 0-1
izyuu
(2266)
+0.9
tootsieroll3
(1622)
-0.4

3 | 2
Atomic
Mar 28 6:21 PM
 • 1'
 • 9
p
 • 0-1
izyuu
(2266)
+0.4
ArthTz
(1491)
-0.3

3 | 2
Atomic
Mar 28 6:18 PM
 • 2'
 • 13
p
 • 1-0
izyuu
(2266)
+0.4
Kakuja366
(1465)
-0.5

3 | 2
Atomic
Mar 28 6:12 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2265)
+0.4
TiagoAc3
(1472)
-0.6

3 | 2
Atomic
Mar 28 6:11 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2265)
+0.4
emanboyguy
(1448)
-0.5

3 | 2
Atomic
Mar 28 6:07 PM
 • 3'
 • 24
p
 • 0-1
izyuu
(2264)
+0.6
Hacker_Brine
(1536)
-0.8

3 | 2
Atomic
Mar 28 6:06 PM
 • 2'
 • 12
p
 • 0-1
izyuu
(2263)
+0.6
HorikitaaManabu
(1566)
-0.3

3 | 2
Atomic
Mar 28 6:06 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2263)
+0.2
neolgan21
(1349)
-0.2

3 | 2
Atomic
Mar 28 6:04 PM
 • 2'
 • 27
p
 • 1-0
izyuu
(2263)
+0.4
LuizFelipeAM
(1470)
-0.3

3 | 2
Atomic
Mar 28 6:03 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2262)
+0.5
nevviscool
(1517)
-0.5

3 | 2
Atomic
Mar 28 5:58 PM
 • 3'
 • 22
p
 • 0-1
izyuu
(2262)
+0.8
Penguin7399
(1619)
-0.4

3 | 2
Atomic
Mar 28 5:57 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2261)
+0.4
Flyingm0nkey
(1469)
-0.2

3 | 2
Atomic
Mar 28 5:57 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2261)
+0.5
E1000yoh
(1498)
-0.8

3 | 2
Atomic
Mar 28 5:55 PM
 • 2'
 • 12
p
 • 0-1
izyuu
(2260)
+0.5
E1000yoh
(1499)
-0.8

3 | 2
Atomic
Mar 28 5:55 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2260)
+0.5
E1000yoh
(1500)
-0.8

3 | 2
Atomic
Mar 28 5:54 PM
 • 1'
 • 6
p
 • 0-1
izyuu
(2259)
+0.4
lukeylightning8
(1456)
-0.5

3 | 2
Atomic
Mar 28 5:53 PM
 • 2'
 • 20
p
 • 1-0
CyrusPD
(1500)
+52.6
izyuu
(2288)
-28.6

3 | 2
Atomic
Mar 28 5:52 PM
 • 2'
 • 14
p
 • 0-1
izyuu
(2287)
+0.5
sad16x
(1565)
-0.4

3 | 2
Atomic
Mar 28 5:50 PM
 • 1'
 • 12
p
 • 0-1
izyuu
(2287)
+0.3
Fabrizio1001
(1488)
-0.2

3 | 2
Atomic
Mar 28 5:49 PM
 • 2'
 • 24
p
 • 0-1
izyuu
(2287)
+0.5
sad16x
(1559)
-0.4

3 | 2
Atomic
Mar 28 5:48 PM
 • 1'
 • 14
p
 • 0-1
ckrum
(1527)
+17.3
izyuu
(2315)
-28.8

3 | 2
Atomic
Mar 28 5:42 PM
 • 2'
 • 22
p
 • 0-1
izyuu
(2317)
+0.3
brumomentas
(1480)
-0.4

3 | 2
Atomic
Mar 28 5:38 PM
 • 4'
 • 29
p
 • 0-1
izyuu
(2317)
+0.3
AndyChea
(1526)
-0.3

3 | 2
Atomic
Mar 28 1:19 PM
 • 4'
 • 46
p
 • 1-0
izyuu
(2311)
+6.3
SilverPotato652
(2092)
-3.5

3 | 2
Atomic
Mar 28 1:17 PM
 • 2'
 • 12
p
 • 0-1
izyuu
(2310)
+0.3
ceshtar
(1484)
-0.3

3 | 2
Atomic
Mar 28 1:16 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(2310)
+0.5
movrax_jmprax
(1581)
-0.3

3 | 2
Atomic
Mar 28 1:12 PM
 • 2'
 • 16
p
 • 0-1
izyuu
(2309)
+0.3
Jollytime64
(1527)
-0.3

3 | 2
Atomic
Mar 28 1:10 PM
 • 2'
 • 14
p
 • 0-1
izyuu
(2309)
+0.4
LacdLuke
(1554)
-0.3

3 | 2
Atomic
Mar 28 1:09 PM
 • 1'
 • 9
p
 • 0-1
izyuu
(2309)
+0.4
LacdLuke
(1554)
-0.3

3 | 2
Atomic
Mar 28 1:06 PM
 • 3'
 • 13
p
 • 1-0
izyuu
(2308)
+0.3
FridgeR45
(1496)
-0.4

3 | 2
Atomic
Mar 28 1:05 PM
 • 2'
 • 13
p
 • 1-0
izyuu
(2307)
+1.3
CapolloJo
(1779)
-0.7

3 | 2
Atomic
Mar 28 1:03 PM
 • 2'
 • 9
p
 • 1-0
izyuu
(2307)
+0.3
fegalag
(1476)
-0.5

3 | 2
Atomic
Mar 28 12:58 PM
 • 1'
 • 10
p
 • 0-1
izyuu
(2307)
+0.2
noahsters
(1429)
-0.3

3 | 2
Atomic
Mar 28 12:34 PM
 • 8'
 • 46
p
 • 0-1
izyuu
(2301)
+5.3
MrPaperclip
(2060)
-4.8

3 | 2
Atomic
Mar 28 12:30 PM
 • 5'
 • 31
p
 • 0-1
izyuu
(2291)
+10.1
cmfps
(2205)
-7.3

3 | 2
Atomic
Mar 28 12:27 PM
 • 3'
 • 30
p
 • 0-1
izyuu
(2291)
+0.3
CEjoe
(1457)
-0.2

3 | 2
Atomic
Mar 28 12:26 PM
 • 1'
 • 6
p
 • 0-1
izyuu
(2291)
+0.3
coletyner
(1456)
-0.4

3 | 2
Atomic
Mar 28 12:10 PM
 • 2'
 • 16
p
 • 0-1
izyuu
(2290)
+0.5
glaxed
(1580)
-0.3

3 | 2
Atomic
Mar 28 11:39 AM
 • 3'
 • 41
p
 • 1-0
izyuu
(2289)
+0.7
Seuletinvisible
(1643)
-0.4

3 | 2
Atomic
Mar 28 11:38 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(2289)
+0.7
Seuletinvisible
(1643)
-0.4

3 | 2
Atomic
Mar 28 11:34 AM
 • 4'
 • 34
p
 • 0-1
izyuu
(2283)
+5.3
New-To-Chesss
(2041)
-3.8

3 | 2
Atomic
Mar 28 11:29 AM
 • 4'
 • 31
p
 • 1-0
izyuu
(2282)
+1.5
jacobear
(1777)
-0.9

3 | 2
Atomic
Mar 28 11:24 AM
 • 2'
 • 16
p
 • 0-1
izyuu
(2280)
+1.5
jacobear
(1778)
-0.9

3 | 2
Atomic
Mar 28 11:18 AM
 • 7'
 • 54
p
 • 1-0
izyuu
(2279)
+1.5
jacobear
(1778)
-0.9

3 | 2
Atomic
Mar 28 11:17 AM
 • 1'
 • 6
p
 • 0-1
izyuu
(2277)
+1.5
jacobear
(1779)
-0.9

3 | 2
Atomic
Mar 28 11:13 AM
 • 3'
 • 31
p
 • 1-0
izyuu
(2277)
+0.3
TheNewArc
(1448)
-0.2

3 | 2
Atomic
Mar 28 11:08 AM
 • 5'
 • 35
p
 • 0-1
izyuu
(2272)
+5.4
Limeice1228
(2033)
-4

3 | 2
Atomic
Mar 28 11:06 AM
 • 2'
 • 23
p
 • 1-0
izyuu
(2271)
+0.5
yes25u
(1554)
-0.4

3 | 2
Atomic
Mar 28 11:00 AM
 • 5'
 • 19
p
 • 0-1
izyuu
(2270)
+1.7
mankhustk65
(1797)
-1.3

3 | 2
Atomic
Mar 28 10:58 AM
 • 1'
 • 6
p
 • 1-0
izyuu
(2268)
+1.8
mankhustk65
(1799)
-1.3

3 | 2
Atomic
Mar 28 10:56 AM
 • 2'
 • 10
p
 • 0-1
izyuu
(2266)
+1.8
mankhustk65
(1800)
-1.3

3 | 2
Atomic
Mar 28 10:55 AM
 • 2'
 • 14
p
 • 1-0
izyuu
(2264)
+1.8
mankhustk65
(1801)
-1.4

3 | 2
Atomic
Mar 28 10:53 AM
 • 2'
 • 12
p
 • 0-1
izyuu
(2264)
+0.3
chasetuckerishot
(1458)
-0.4

3 | 2
Atomic
Mar 28 10:53 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2264)
+0.3
Flaming368
(1473)
-0.6

3 | 2
Atomic
Mar 28 10:50 AM
 • 3'
 • 16
p
 • 0-1
izyuu
(2263)
+0.6
odinbrazell
(1604)
-0.4

3 | 2
Atomic
Mar 28 10:48 AM
 • 3'
 • 22
p
 • 0-1
izyuu
(2262)
+0.6
Lolking4506
(1596)
-0.5

3 | 2
Atomic
Mar 28 10:42 AM
 • 2'
 • 16
p
 • 0-1
Davo_gp
(1500)
+53
izyuu
(2286)
-23.6

3 | 2
Atomic
Mar 28 10:33 AM
 • 5'
 • 32
p
 • 0-1
izyuu
(2285)
+0.5
ukiyoangel
(1602)
-0.3

3 | 2
Atomic
Mar 28 10:31 AM
 • 3'
 • 49
p
 • 1-0
izyuu
(2285)
+0.3
manavmanickam
(1529)
-0.2

3 | 2
Atomic
Mar 28 10:30 AM
 • 1'
 • 15
p
 • 1-0
izyuu
(2285)
+0.4
ahbah1
(1552)
-0.4

3 | 2
Atomic
Mar 28 10:29 AM
 • 1'
 • 12
p
 • 0-1
izyuu
(2284)
+0.3
jwuelsiqamnu
(1526)
-0.3

3 | 2
Atomic
Mar 28 9:16 AM
 • 6'
 • 24
p
 • 0-1
izyuu
(2284)
+0.3
NameRandomly
(1507)
-0.6

3 | 2
Atomic
Mar 28 9:16 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2284)
+0.2
lavonfrancis
(1454)
-0.4

3 | 2
Atomic
Mar 28 9:15 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2284)
+0.2
brennanhuntsinger
(1450)
-0.2

3 | 2
Atomic
Mar 28 9:14 AM
 • 1'
 • 15
p
 • 1-0
izyuu
(2283)
+0.2
brennanhuntsinger
(1451)
-0.2

3 | 2
Atomic
Mar 28 9:13 AM
 • 1'
 • 6
p
 • 0-1
izyuu
(2283)
+0.3
kendrixhall
(1500)
-0.7

3 | 2
Atomic
Mar 28 8:45 AM
 • 4'
 • 18
p
 • 0-1
izyuu
(2281)
+1.8
isuckatthisgamealot2
(1858)
-1.3

3 | 2
Atomic
Mar 28 8:36 AM
 • 9'
 • 70
p
 • 1-0
M2U7I9I6
(2520)
+6.4
izyuu
(2286)
-4.6

3 | 2
Atomic
Mar 28 8:31 AM
 • 5'
 • 18
p
 • 1-0
izyuu
(2268)
+17.6
M2U7I9I6
(2545)
-25.8

3 | 2
Atomic
Mar 28 8:28 AM
 • 4'
 • 15
p
 • 0-1
izyuu
(2268)
+0.7
shinyhero1234
(1663)
-0.5

3 | 2
Atomic
Mar 28 8:16 AM
 • 7'
 • 67
p
 • 1-0
izyuu
(2249)
+18.1
M2U7I9I6
(2565)
-28.5

3 | 2
Atomic
Mar 28 8:09 AM
 • 8'
 • 64
p
 • 1-0
M2U7I9I6
(2560)
+5.2
izyuu
(2253)
-3.3

3 | 2
Atomic
Mar 28 8:01 AM
 • 8'
 • 61
p
 • 0-1
M2U7I9I6
(2554)
+5.6
izyuu
(2256)
-3.5

3 | 2
Atomic
Mar 28 7:54 AM
 • 7'
 • 60
p
 • 1-0
M2U7I9I6
(2548)
+6
izyuu
(2260)
-3.7

3 | 2
Atomic
Mar 28 7:48 AM
 • 7'
 • 52
p
 • 1-0
izyuu
(2241)
+18.7
M2U7I9I6
(2581)
-32.4

3 | 2
Atomic
Mar 28 7:45 AM
 • 3'
 • 27
p
 • 1-0
izyuu
(2236)
+5.1
Decker1515
(2021)
-4.3

3 | 2
Atomic
Mar 28 7:39 AM
 • 6'
 • 30
p
 • 0-1
izyuu
(2231)
+5.4
Decker1515
(2025)
-4.5

3 | 2
Atomic
Mar 28 7:36 AM
 • 3'
 • 47
p
 • 1-0
izyuu
(2230)
+0.3
carthyalex
(1433)
-0.2

3 | 2
Atomic
Mar 28 7:35 AM
 • 1'
 • 6
p
 • 1-0
izyuu
(2230)
+0.3
lordswag69
(1433)
-0.2

3 | 2
Atomic
Mar 28 7:34 AM
 • 1'
 • 12
p
 • 0-1
izyuu
(2230)
+0.2
carthyalex
(1421)
-0.2

3 | 2
Atomic
Mar 28 7:33 AM
 • 2'
 • 11
p
 • 1-0
izyuu
(2230)
+0.4
nachoman51208
(1533)
-0.3

3 | 2
Atomic
Mar 28 7:32 AM
 • 1'
 • 6
p
 • 1-0
izyuu
(2229)
+0.3
rocatt
(1451)
-0.3

3 | 2
Atomic
Mar 28 7:17 AM
 • 8'
 • 69
p
 • 1-0
izyuu
(2225)
+4.7
notnotnotnotdeno
(1998)
-4.4

3 | 2
Atomic
Mar 28 7:16 AM
 • 1'
 • 9
p
 • 1-0
izyuu
(2224)
+0.4
snemzi
(1506)
-0.5

3 | 2
Atomic
Mar 28 7:15 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(2224)
+0.4
snemzi
(1507)
-0.5

3 | 2
Atomic
Mar 28 6:28 AM
 • 1'
 • 4
p
 • 1-0
izyuu
(2223)
+1
HunchoGou
(1684)
-0.9

3 | 2
Atomic
Mar 28 6:27 AM
 • 2'
 • 9
p
 • 1-0
izyuu
(2222)
+0.5
Phantomghost750
(1574)
-0.4

3 | 2
Atomic
Mar 28 6:24 AM
 • 3'
 • 14
p
 • 1-0
izyuu
(2222)
+0.2
quandalesusimoster
(1389)
-0.3

3 | 2
Atomic
Mar 28 6:24 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(2222)
+0.3
salamander202
(1465)
-0.3

3 | 2
Atomic
Mar 27 8:35 PM
 • 2'
 • 17
p
 • 0-1
izyuu
(2221)
+0.4
Hakaze_Ren
(1546)
-0.3

3 | 2
Atomic
Mar 27 8:28 PM
 • 7'
 • 61
p
 • 1-0
Skadieye12
(1972)
+14.4
izyuu
(2237)
-15.7

3 | 2
Atomic
Mar 27 7:26 PM
 • 5'
 • 26
p
 • 1-0
izyuu
(2233)
+4.2
benigncyclops
(2003)
-3.6

3 | 2
Atomic
Mar 27 7:26 PM
 • 1'
 • 2
p
 • ½-½
benigncyclops
(1999)
+5
izyuu
(2239)
-5.7

3 | 2
Atomic
Mar 27 7:20 PM
 • 6'
 • 25
p
 • 1-0
izyuu
(2235)
+4.2
benigncyclops
(2002)
-3.6

3 | 2
Atomic
Mar 27 7:14 PM
 • 6'
 • 33
p
 • 0-1
izyuu
(2230)
+4.4
benigncyclops
(2006)
-3.7

3 | 2
Atomic
Mar 27 7:13 PM
 • 1'
 • 10
p
 • 1-0
izyuu
(2226)
+4.6
benigncyclops
(2010)
-3.9

3 | 2
Atomic
Mar 27 7:10 PM
 • 4'
 • 27
p
 • 0-1
izyuu
(2221)
+4.8
benigncyclops
(2014)
-4

3 | 2
Atomic
Mar 27 7:06 PM
 • 4'
 • 36
p
 • 1-0
izyuu
(2216)
+5
benigncyclops
(2018)
-4.2

3 | 2
Atomic
Mar 27 7:02 PM
 • 4'
 • 33
p
 • 0-1
izyuu
(2210)
+5.3
benigncyclops
(2022)
-4.4

3 | 2
Atomic
Mar 27 6:57 PM
 • 5'
 • 34
p
 • 1-0
izyuu
(2205)
+5.6
benigncyclops
(2027)
-4.6

3 | 2
Atomic
Mar 27 6:55 PM
 • 3'
 • 19
p
 • 0-1
izyuu
(2199)
+6
benigncyclops
(2032)
-4.9

3 | 2
Atomic
Mar 27 6:49 PM
 • 6'
 • 47
p
 • 1-0
izyuu
(2192)
+6.4
benigncyclops
(2037)
-5.1

3 | 2
Atomic
Mar 27 6:43 PM
 • 6'
 • 31
p
 • 0-1
izyuu
(2186)
+6.9
benigncyclops
(2042)
-5.4

3 | 2
Atomic
Mar 27 6:38 PM
 • 5'
 • 28
p
 • 1-0
izyuu
(2178)
+7.4
benigncyclops
(2048)
-5.7

3 | 2
Atomic
Mar 27 6:29 PM
 • 7'
 • 44
p
 • 0-1
izyuu
(2164)
+14.3
thehenryg
(2246)
-9.6

3 | 2
Atomic
Mar 27 6:29 PM
 • 1'
 • 6
p
 • 0-1
izyuu
(2163)
+0.6
Lovemix
(1500)
-1.3

3 | 2
Atomic
Mar 27 6:28 PM
 • 1'
 • 12
p
 • 0-1
izyuu
(2163)
+0.4
PbSky
(1460)
-0.3

3 | 2
Atomic
Mar 27 6:26 PM
 • 2'
 • 14
p
 • 0-1
izyuu
(2162)
+0.5
bill31226
(1491)
-0.7

3 | 2
Atomic
Mar 27 6:25 PM
 • 1'
 • 12
p
 • 0-1
izyuu
(2162)
+0.7
cyclonespark
(1521)
-1.3

3 | 2
Atomic
Mar 27 6:24 PM
 • 1'
 • 12
p
 • 1-0
izyuu
(2154)
+7.2
majestyblunder
(2015)
-5.6

3 | 2
Atomic
Mar 27 6:23 PM
 • 2'
 • 18
p
 • 0-1
izyuu
(2153)
+1
code3107
(1605)
-0.7

3 | 2
Atomic
Mar 27 6:22 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2153)
+0.4
xa105
(1433)
-0.3

3 | 2
Atomic
Mar 27 6:20 PM
 • 3'
 • 22
p
 • 0-1
izyuu
(2153)
+0.4
xa105
(1433)
-0.3

3 | 2
Atomic
Mar 27 6:19 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(2151)
+1.3
epicswagger69
(1655)
-1

3 | 2
Atomic
Mar 27 4:38 PM
 • 5'
 • 34
p
 • ½-½
izyuu
(2148)
+3.1
thehenryg
(2248)
-2.2

3 | 2
Atomic
Mar 27 4:35 PM
 • 3'
 • 7
p
 • 1-0
izyuu
(2147)
+1.4
luizcoltro
(1656)
-0.9

3 | 2
Atomic
Mar 27 6:16 AM
 • 6'
 • 38
p
 • 0-1
izyuu
(2146)
+0.5
R1zzzzzzzler
(1486)
-0.4

3 | 2
Atomic
Mar 27 6:14 AM
 • 2'
 • 4
p
 • 1-0
izyuu
(2146)
+0.5
maciekwita
(1479)
-0.4

3 | 2
Atomic
Mar 27 6:13 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(2145)
+0.6
Iconic2278
(1503)
-0.8

3 | 2
Atomic
Mar 27 6:12 AM
 • 1'
 • 12
p
 • 0-1
izyuu
(2145)
+0.5
Tommykid257
(1474)
-1.1

3 | 2
Atomic
Mar 27 6:09 AM
 • 4'
 • 35
p
 • 1-0
izyuu
(2143)
+1.2
Koolcat2009
(1647)
-0.9

3 | 2
Atomic
Mar 27 6:08 AM
 • 1'
 • 13
p
 • 1-0
izyuu
(2143)
+0.6
Pap_10
(1510)
-0.5

3 | 2
Atomic
Mar 27 6:07 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2142)
+0.5
omarprosuper
(1479)
-1

3 | 2
Atomic
Mar 27 5:48 AM
 • 8'
 • 75
p
 • 1-0
FireGKSoccer1
(1755)
+14.9
izyuu
(2161)
-19

3 | 2
Atomic
Mar 27 5:44 AM
 • 3'
 • 23
p
 • 0-1
izyuu
(2159)
+1.9
gideonbeerens
(1749)
-1.4

3 | 2
Atomic
Mar 27 5:36 AM
 • 8'
 • 63
p
 • 0-1
izyuu
(2145)
+14.5
PringiRene
(2298)
-14.8

3 | 2
Atomic
Mar 27 5:32 AM
 • 4'
 • 31
p
 • 1-0
izyuu
(2129)
+15.5
PringiRene
(2314)
-15.8

3 | 2
Atomic
Mar 27 5:28 AM
 • 4'
 • 38
p
 • 1-0
izyuu
(2120)
+9.3
SilverPotato652
(2071)
-6.4

3 | 2
Atomic
Mar 26 1:54 PM
 • 7'
 • 60
p
 • 1-0
thehenryg
(2217)
+5.8
izyuu
(2129)
-8.3

3 | 2
Atomic
Mar 26 1:53 PM
 • 1'
 • 11
p
 • 1-0
izyuu
(2128)
+0.9
200games
(1560)
-1

3 | 2
Atomic
Mar 26 1:52 PM
 • 1'
 • 10
p
 • 0-1
izyuu
(2127)
+0.5
MooseCattt
(1430)
-0.8

3 | 2
Atomic
Mar 26 1:20 PM
 • 2'
 • 16
p
 • 0-1
izyuu
(2127)
+0.4
Feet_Lettuce
(1421)
-0.7

3 | 2
Atomic
Mar 26 1:09 PM
 • 10'
 • 168
p
 • ½-½
izyuu
(2134)
-7.2
Gabemoham980
(1853)
+5.9

3 | 2
Atomic
Mar 26 11:25 AM
 • 3'
 • 31
p
 • 1-0
izyuu
(2128)
+5.6
MrNanama
(1936)
-3.9

3 | 2
Atomic
Mar 26 11:21 AM
 • 4'
 • 30
p
 • 0-1
izyuu
(2126)
+2.4
Vinu_Vainateya
(1747)
-1.7

3 | 2
Atomic
Mar 26 11:17 AM
 • 4'
 • 48
p
 • 1-0
izyuu
(2124)
+2.4
Vinu_Vainateya
(1749)
-1.7

3 | 2
Atomic
Mar 26 11:16 AM
 • 2'
 • 15
p
 • 0-1
izyuu
(2121)
+2.5
Vinu_Vainateya
(1750)
-1.7

3 | 2
Atomic
Mar 26 11:14 AM
 • 2'
 • 15
p
 • 1-0
izyuu
(2119)
+2.5
Vinu_Vainateya
(1752)
-1.7

3 | 2
Atomic
Mar 26 11:13 AM
 • 2'
 • 17
p
 • 0-1
izyuu
(2117)
+1.8
LukasLLS
(1683)
-1.3

3 | 2
Atomic
Mar 26 11:11 AM
 • 2'
 • 22
p
 • 0-1
izyuu
(2115)
+1.8
LukasLLS
(1684)
-1.3

3 | 2
Atomic
Mar 25 8:54 PM
 • 3'
 • 17
p
 • 0-1
izyuu
(2114)
+0.8
veeonthewall
(1526)
-0.8

3 | 2
Atomic
Mar 25 8:34 PM
 • 3'
 • 20
p
 • 0-1
izyuu
(2113)
+0.7
BrilliantBannana
(1511)
-0.9

3 | 2
Atomic
Mar 25 8:33 PM
 • 1'
 • 10
p
 • 0-1
izyuu
(2113)
+0.8
Voidoyf
(1543)
-0.7

3 | 2
Atomic
Mar 25 8:14 PM
 • 8'
 • 71
p
 • ½-½
thehenryg
(2222)
-2.4
izyuu
(2109)
+3.3

3 | 2
Atomic
Mar 25 8:08 PM
 • 5'
 • 35
p
 • 0-1
izyuu
(2098)
+11.6
sgco
(2120)
-13.2

3 | 2
Atomic
Mar 25 7:30 PM
 • 7'
 • 44
p
 • 1-0
izyuu
(2091)
+7.5
arndey
(1966)
-4.9

3 | 2
Atomic
Mar 25 6:31 PM
 • 9'
 • 102
p
 • ½-½
izyuu
(2096)
-5.1
awesomatt7275
(1928)
+4.4

3 | 2
Atomic
Mar 25 6:27 PM
 • 5'
 • 28
p
 • 0-1
izyuu
(2090)
+6.9
awesomatt7275
(1934)
-5.9

3 | 2
Atomic
Mar 25 6:25 PM
 • 3'
 • 13
p
 • 1-0
izyuu
(2088)
+1.9
Bush_911007
(1649)
-1.2

3 | 2
Atomic
Mar 25 6:24 PM
 • 1'
 • 10
p
 • 1-0
izyuu
(2087)
+0.5
Nathan_Parker
(1405)
-0.7

3 | 2
Atomic
Mar 25 6:24 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2086)
+1.1
MegaRichu
(1553)
-0.8

3 | 2
Atomic
Mar 25 6:23 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2085)
+0.9
Unstoppable74
(1500)
-2

3 | 2
Atomic
Mar 25 6:17 PM
 • 6'
 • 61
p
 • 1-0
izyuu
(2084)
+1
Ybot_chess2
(1532)
-0.7

3 | 2
Atomic
Mar 25 6:17 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2083)
+1
Ybot_chess2
(1533)
-0.7

3 | 2
Atomic
Mar 25 6:16 PM
 • 1'
 • 8
p
 • 1-0
izyuu
(2082)
+1
Ybot_chess2
(1533)
-0.7

3 | 2
Atomic
Mar 25 3:37 PM
 • 6'
 • 26
p
 • 0-1
izyuu
(2081)
+1.3
ChesstDayIsEveryday
(1572)
-1.4

3 | 2
Atomic
Mar 25 3:33 PM
 • 5'
 • 23
p
 • 0-1
izyuu
(2079)
+1.6
ForTheSakesSake
(1625)
-1.2

3 | 2
Atomic
Mar 25 3:30 PM
 • 1'
 • 8
p
 • 1-0
izyuu
(2076)
+3.1
LucasBah
(1752)
-2.1

3 | 2
Atomic
Mar 25 3:26 PM
 • 2'
 • 15
p
 • 1-0
izyuu
(2074)
+1.5
Saabertooth1
(1606)
-1.1

3 | 2
Atomic
Mar 25 3:23 PM
 • 3'
 • 18
p
 • 0-1
izyuu
(2073)
+1.6
Ginganinja44
(1612)
-1.1

3 | 2
Atomic
Mar 25 3:21 PM
 • 3'
 • 24
p
 • 0-1
izyuu
(2071)
+1.6
Ginganinja44
(1613)
-1.1

3 | 2
Atomic
Mar 25 3:20 PM
 • 1'
 • 12
p
 • 0-1
izyuu
(2070)
+1.1
Sax3na
(1544)
-1

3 | 2
Atomic
Mar 25 3:18 PM
 • 2'
 • 21
p
 • 1-0
izyuu
(2069)
+0.8
Daniigar
(1475)
-1.7

3 | 2
Atomic
Mar 24 9:11 PM
 • 11'
 • 151
p
 • 0-1
EagleOnHigh
(2443)
+2.6
izyuu
(2072)
-2.4

3 | 2
Atomic
Mar 24 9:10 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2071)
+0.6
hidodd
(1441)
-0.9

3 | 2
Atomic
Mar 24 9:10 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2070)
+0.9
erikzentgraf
(1494)
-1.7

3 | 2
Atomic
Mar 24 8:40 PM
 • 2'
 • 15
p
 • 1-0
izyuu
(2069)
+1.2
Jaymoney2007
(1571)
-0.9

3 | 2
Atomic
Mar 24 8:40 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(2068)
+1.2
Jaymoney2007
(1572)
-0.9

3 | 2
Atomic
Mar 24 8:39 PM
 • 1'
 • 10
p
 • 1-0
izyuu
(2067)
+1.2
jesco8
(1572)
-0.9

3 | 2
Atomic
Mar 24 8:38 PM
 • 2'
 • 10
p
 • 1-0
izyuu
(2065)
+1.4
DelusionsofEloquence
(1593)
-1

3 | 2
Atomic
Mar 24 8:36 PM
 • 2'
 • 11
p
 • 1-0
izyuu
(2064)
+1.7
acowdrey
(1638)
-1.7

3 | 2
Atomic
Mar 24 8:32 PM
 • 4'
 • 20
p
 • 0-1
izyuu
(2062)
+1.3
Banduiscool
(1583)
-1.4

3 | 2
Atomic
Mar 24 8:30 PM
 • 2'
 • 18
p
 • 0-1
izyuu
(2059)
+3
Strategic_Soul
(1750)
-2.4

3 | 2
Atomic
Mar 24 8:24 PM
 • 6'
 • 48
p
 • 0-1
izyuu
(2057)
+1.8
E2_0
(1643)
-1.9

3 | 2
Atomic
Mar 24 8:22 PM
 • 2'
 • 23
p
 • 0-1
izyuu
(2056)
+1.7
timelapsMCraft
(1634)
-1.3

3 | 2
Atomic
Mar 24 8:18 PM
 • 3'
 • 22
p
 • 1-0
izyuu
(2054)
+1.8
Nekobone
(1642)
-2.3

3 | 2
Atomic
Mar 24 8:17 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2052)
+1.6
diego3sal
(1617)
-1.2

3 | 2
Atomic
Mar 24 8:17 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2052)
+0.5
ashleylacy
(1396)
-0.7

3 | 2
Atomic
Mar 24 7:42 PM
 • 4'
 • 46
p
 • 0-1
izyuu
(2040)
+11.6
berniejw
(2107)
-8.7

3 | 2
Atomic
Mar 24 7:38 PM
 • 4'
 • 36
p
 • 0-1
izyuu
(2028)
+12.4
berniejw
(2117)
-9.2

3 | 2
Atomic
Mar 24 7:36 PM
 • 3'
 • 18
p
 • 0-1
izyuu
(2027)
+1.2
NonFlamingo
(1524)
-2.7

3 | 2
Atomic
Mar 24 7:32 PM
 • 4'
 • 35
p
 • 1-0
izyuu
(2025)
+1.6
Olympus2009
(1586)
-1.2

3 | 2
Atomic
Mar 24 12:54 PM
 • 4'
 • 33
p
 • 1-0
izyuu
(2021)
+4.2
Nyx_Turen
(1787)
-3.1

3 | 2
Atomic
Mar 24 12:52 PM
 • 1'
 • 10
p
 • 0-1
izyuu
(2014)
+7.4
minizoec
(1919)
-6.6

3 | 2
Atomic
Mar 24 7:24 AM
 • 2'
 • 8
p
 • 1-0
izyuu
(2011)
+2.1
Nifilheim
(1629)
-2.2

3 | 2
Atomic
Mar 24 7:21 AM
 • 3'
 • 28
p
 • 0-1
noobnanno
(1691)
+12.7
izyuu
(2029)
-17.8

3 | 2
Atomic
Mar 24 7:20 AM
 • 1'
 • 12
p
 • 0-1
izyuu
(2027)
+2
Nifilheim
(1630)
-2.2

3 | 2
Atomic
Mar 24 7:11 AM
 • 7'
 • 54
p
 • 1-0
TheIvanhoe
(1841)
+13.9
izyuu
(2043)
-15.3

3 | 2
Atomic
Mar 24 7:08 AM
 • 3'
 • 20
p
 • 0-1
izyuu
(2042)
+0.9
Canpanpoo
(1491)
-0.9

3 | 2
Atomic
Mar 24 7:06 AM
 • 2'
 • 13
p
 • 1-0
izyuu
(2040)
+1.3
iamamonkie
(1563)
-1.8

3 | 2
Atomic
Mar 24 7:06 AM
 • 1'
 • 10
p
 • 0-1
izyuu
(2040)
+0.6
Tzo123456
(1423)
-0.8

3 | 2
Atomic
Mar 24 6:52 AM
 • 7'
 • 43
p
 • 0-1
AcesCleaver
(2061)
+10.4
izyuu
(2049)
-9.5

3 | 2
Atomic
Mar 24 6:47 AM
 • 5'
 • 30
p
 • 1-0
Mumbaicha_Sushrut
(2115)
+9.1
izyuu
(2058)
-8.5

3 | 2
Atomic
Mar 24 6:42 AM
 • 5'
 • 57
p
 • 1-0
izyuu
(2047)
+10.4
Sando_3
(2048)
-8.7

3 | 2
Atomic
Mar 24 6:41 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2046)
+1
adhyan6523
(1500)
-2.4

3 | 2
Atomic
Mar 24 6:40 AM
 • 1'
 • 13
p
 • 1-0
izyuu
(2046)
+0.8
fjrh5nddkk
(1459)
-0.9

3 | 2
Atomic
Mar 24 6:38 AM
 • 2'
 • 18
p
 • 0-1
izyuu
(2045)
+1
MaxGrimstad
(1505)
-1.4

3 | 2
Atomic
Mar 23 8:47 AM
 • 2'
 • 18
p
 • 1-0
izyuu
(2038)
+6.1
NICKYTOXIC
(1885)
-5.2

3 | 2
Atomic
Mar 23 8:38 AM
 • 8'
 • 54
p
 • 0-1
izyuu
(2031)
+7.6
robinferguson
(1929)
-5.9

3 | 2
Atomic
Mar 23 8:30 AM
 • 8'
 • 71
p
 • 0-1
MDestroyerX
(1644)
+15.7
izyuu
(2050)
-19.5

3 | 2
Atomic
Mar 23 8:30 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(2050)
+0.7
Chessisfun34563
(1448)
-0.7

3 | 2
Atomic
Mar 23 8:27 AM
 • 3'
 • 20
p
 • 0-1
izyuu
(2049)
+0.9
natedsdsd
(1498)
-1.2

3 | 2
Atomic
Mar 23 8:26 AM
 • 2'
 • 12
p
 • 0-1
izyuu
(2048)
+1.1
IstoleyourEgg
(1525)
-1.6

3 | 2
Atomic
Mar 23 8:12 AM
 • 8'
 • 58
p
 • 1-0
ToonToy
(1982)
+10.4
izyuu
(2060)
-12.5

3 | 2
Atomic
Mar 23 8:10 AM
 • 1'
 • 12
p
 • 0-1
izyuu
(2060)
+0.6
alexidkzzz
(1415)
-0.6

3 | 2
Atomic
Mar 23 8:07 AM
 • 3'
 • 19
p
 • 1-0
izyuu
(2051)
+8.7
vonAvalon
(1994)
-8.1

3 | 2
Atomic
Mar 23 7:59 AM
 • 4'
 • 32
p
 • 0-1
izyuu
(2045)
+6.3
akaBrilliant
(1891)
-5.1

3 | 2
Atomic
Mar 23 7:57 AM
 • 3'
 • 15
p
 • 0-1
izyuu
(2042)
+2.4
TheJettMaster
(1670)
-1.7

3 | 2
Atomic
Mar 23 7:53 AM
 • 4'
 • 27
p
 • 1-0
izyuu
(2040)
+2.4
ElGranjasMC
(1672)
-1.8

3 | 2
Atomic
Mar 23 7:47 AM
 • 6'
 • 20
p
 • 0-1
ZohanYup
(1811)
+12.6
izyuu
(2057)
-17.4

3 | 2
Atomic
Mar 23 7:44 AM
 • 2'
 • 12
p
 • 0-1
izyuu
(2055)
+2
Walkingpolarbear77
(1646)
-1.4

3 | 2
Atomic
Mar 23 7:43 AM
 • 2'
 • 6
p
 • 1-0
izyuu
(2052)
+3.5
kariemfahmmi2209
(1756)
-2.4

3 | 2
Atomic
Mar 23 7:37 AM
 • 6'
 • 31
p
 • 0-1
izyuu
(2049)
+2.7
jamal1860
(1696)
-1.9

3 | 2
Atomic
Mar 23 7:36 AM
 • 1'
 • 6
p
 • 0-1
izyuu
(2048)
+1.1
Peter00000000000
(1500)
-2.4

3 | 2
Atomic
Mar 23 7:35 AM
 • 2'
 • 14
p
 • 0-1
izyuu
(2047)
+1.2
At_Fv
(1542)
-0.9

3 | 2
Atomic
Mar 23 7:32 AM
 • 3'
 • 24
p
 • 0-1
izyuu
(2046)
+1.2
AOriginalName
(1544)
-0.8

3 | 2
Atomic
Mar 23 7:24 AM
 • 1'
 • 4
p
 • 0-1
izyuu
(2045)
+1
Flashy14
(1500)
-2.4

3 | 2
Atomic
Mar 23 7:21 AM
 • 3'
 • 22
p
 • 0-1
izyuu
(2043)
+1.3
ryansucksfr
(1563)
-1.2

3 | 2
Atomic
Mar 23 7:16 AM
 • 6'
 • 24
p
 • 1-0
izyuu
(2039)
+4.4
ZohanYup
(1800)
-3.3

3 | 2
Atomic
Mar 23 7:10 AM
 • 5'
 • 50
p
 • 0-1
izyuu
(2036)
+3.1
qwrty01
(1719)
-2.2

3 | 2
Atomic
Mar 23 7:02 AM
 • 4'
 • 27
p
 • 1-0
izyuu
(2024)
+11.6
notnotnotnotdeno
(2057)
-11.5

3 | 2
Atomic
Mar 23 7:01 AM
 • 1'
 • 7
p
 • 0-1
izyuu
(2020)
+4.4
killerbee12332
(1772)
-3.1

3 | 2
Atomic
Mar 23 7:00 AM
 • 2'
 • 4
p
 • 1-0
izyuu
(2019)
+1
Tdogg90
(1459)
-1.5

3 | 2
Atomic
Mar 23 6:59 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2018)
+1.3
Leos132
(1521)
-1.4

3 | 2
Atomic
Mar 23 6:59 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(2014)
+3.7
qwrty01
(1733)
-2.6

3 | 2
Atomic
Mar 23 6:58 AM
 • 1'
 • 9
p
 • 1-0
izyuu
(2013)
+1.1
Wojonesss
(1469)
-2.2

3 | 2
Atomic
Mar 22 8:45 PM
 • 6'
 • 38
p
 • 0-1
izyuu
(2010)
+2.6
RougeGambit
(1656)
-2.1

3 | 2
Atomic
Mar 22 8:45 PM
 • 1'
 • 10
p
 • 0-1
izyuu
(2009)
+1.4
TheBiggestCheese420
(1521)
-1.9

3 | 2
Atomic
Mar 22 8:44 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2007)
+1.4
TheBiggestCheese420
(1523)
-1.9

3 | 2
Atomic
Mar 22 8:42 PM
 • 3'
 • 22
p
 • 0-1
izyuu
(2006)
+1.4
TheBiggestCheese420
(1524)
-1.9

3 | 2
Atomic
Mar 22 8:41 PM
 • 2'
 • 22
p
 • 0-1
izyuu
(2005)
+1.4
TheBiggestCheese420
(1526)
-2

3 | 2
Atomic
Mar 22 8:40 PM
 • 1'
 • 14
p
 • 0-1
izyuu
(2003)
+1.4
TheBiggestCheese420
(1528)
-2

3 | 2
Atomic
Mar 22 8:35 PM
 • 6'
 • 49
p
 • 1-0
PiTheGamer
(1882)
+11.2
izyuu
(2018)
-14.3

3 | 2
Atomic
Mar 22 1:05 PM
 • 4'
 • 19
p
 • 0-1
izyuu
(2014)
+3.3
TheyreLikeAnimals
(1709)
-2.3

3 | 2
Atomic
Mar 22 1:05 PM
 • 1'
 • 5
p
 • 0-1
izyuu
(2013)
+1.8
ChristianH21
(1587)
-1.8

3 | 2
Atomic
Mar 22 1:01 PM
 • 2'
 • 20
p
 • 0-1
izyuu
(2012)
+0.7
trentonlambeth
(1404)
-0.9

3 | 2
Atomic
Mar 22 1:00 PM
 • 1'
 • 8
p
 • 0-1
izyuu
(2011)
+1.1
aaravkamboj
(1474)
-2.3

3 | 2
Atomic
Mar 22 1:00 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2010)
+1.1
aaravkamboj
(1476)
-2.3

3 | 2
Atomic
Mar 22 7:36 AM
 • 3'
 • 11
p
 • 0-1
izyuu
(2008)
+1.6
MaybePotom
(1572)
-1.4

3 | 2
Atomic
Mar 22 7:34 AM
 • 2'
 • 15
p
 • 1-0
izyuu
(2007)
+1
Edarions
(1466)
-1.4

3 | 2
Atomic
Mar 22 7:34 AM
 • 1'
 • 4
p
 • 0-1
izyuu
(2006)
+1.2
Amanda_Keile
(1500)
-2.9

3 | 2
Atomic
Mar 22 7:11 AM
 • 2'
 • 21
p
 • 1-0
izyuu
(2004)
+2.1
Cherpumplee
(1624)
-1.6

3 | 2
Atomic
Mar 22 7:09 AM
 • 2'
 • 18
p
 • 0-1
izyuu
(2003)
+1.1
JSCrow
(1476)
-2.4

3 | 2
Atomic
Mar 22 7:05 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(2002)
+0.8
toshoniphone
(1426)
-1.1

3 | 2
Atomic
Mar 22 6:15 AM
 • 7'
 • 60
p
 • 0-1
izyuu
(1998)
+3.6
JamesJamesChessman
(1732)
-2.8

3 | 2
Atomic
Mar 22 6:14 AM
 • 2'
 • 10
p
 • 0-1
izyuu
(1997)
+1.3
Caleb2617
(1525)
-1

3 | 2
Atomic
Mar 22 6:11 AM
 • 3'
 • 21
p
 • 1-0
izyuu
(1996)
+1.3
der2032
(1532)
-1.1

3 | 2
Atomic
Mar 22 5:58 AM
 • 5'
 • 15
p
 • 0-1
izyuu
(1993)
+3
msoraa
(1692)
-2.5

3 | 2
Atomic
Mar 22 5:54 AM
 • 4'
 • 20
p
 • 1-0
izyuu
(1990)
+3.1
msoraa
(1695)
-2.6

3 | 2
Atomic
Mar 22 5:47 AM
 • 7'
 • 16
p
 • 1-0
msoraa
(1681)
+13.7
izyuu
(2006)
-16.6

3 | 2
Atomic
Mar 22 5:44 AM
 • 4'
 • 15
p
 • 1-0
izyuu
(2004)
+2.7
msoraa
(1683)
-2.2

3 | 2
Atomic
Mar 22 5:41 AM
 • 3'
 • 9
p
 • 0-1
izyuu
(2001)
+2.8
msoraa
(1685)
-2.3

3 | 2
Atomic
Mar 22 5:39 AM
 • 2'
 • 14
p
 • 1-0
izyuu
(1998)
+2.8
msoraa
(1688)
-2.3

3 | 2
Atomic
Mar 22 5:32 AM
 • 7'
 • 45
p
 • 0-1
sgco
(2133)
+8.2
izyuu
(2004)
-6.2

3 | 2
Atomic
Mar 21 8:17 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2001)
+3.5
Viena_Sausage
(1731)
-2.7

3 | 2
Atomic
Mar 21 8:14 AM
 • 2'
 • 17
p
 • 1-0
izyuu
(1995)
+5.7
elias601
(1839)
-4.7

3 | 2
Atomic
Mar 21 8:12 AM
 • 2'
 • 7
p
 • 0-1
izyuu
(1994)
+1.3
bliztanxk
(1522)
-1.4

3 | 2
Atomic
Mar 21 8:09 AM
 • 3'
 • 20
p
 • 0-1
izyuu
(1985)
+8.4
capttax
(1933)
-7

3 | 2
Atomic
Mar 21 8:00 AM
 • 5'
 • 27
p
 • 0-1
ProfessorVatcraft
(1598)
+18.4
izyuu
(2003)
-18.1

3 | 2
Atomic
Mar 21 7:56 AM
 • 2'
 • 17
p
 • 1-0
izyuu
(1999)
+4.2
YofloXL
(1764)
-3.3

3 | 2
Atomic
Mar 21 7:50 AM
 • 3'
 • 26
p
 • 1-0
GrifoneObeso
(1807)
+15.2
izyuu
(2015)
-15.3

3 | 2
Atomic
Mar 21 7:50 AM
 • 1'
 • 4
p
 • 0-1
izyuu
(2013)
+1.2
Space3108
(1500)
-2.8

3 | 2
Atomic
Mar 21 7:49 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(2012)
+1.2
Ritvir
(1519)
-1

3 | 2
Atomic
Mar 21 7:40 AM
 • 4'
 • 27
p
 • 0-1
ItzLevi9192
(1985)
+11.6
izyuu
(2023)
-11

3 | 2
Atomic
Mar 21 7:35 AM
 • 5'
 • 41
p
 • 1-0
SilverPotato652
(2070)
+6.9
izyuu
(2032)
-9.1

3 | 2
Atomic
Mar 21 7:33 AM
 • 1'
 • 11
p
 • 1-0
izyuu
(2027)
+5
jacobear
(1821)
-3.6

3 | 2
Atomic
Mar 21 7:23 AM
 • 6'
 • 48
p
 • 0-1
izyuu
(2023)
+4.6
turtlehorse
(1795)
-3.5

3 | 2
Atomic
Mar 21 7:19 AM
 • 4'
 • 19
p
 • 0-1
turtlehorse
(1783)
+12.8
izyuu
(2040)
-17.4

3 | 2
Atomic
Mar 21 7:19 AM
 • 1'
 • 14
p
 • 0-1
izyuu
(2039)
+0.7
SpaceOrion
(1436)
-1.3

3 | 2
Atomic
Mar 21 7:17 AM
 • 2'
 • 15
p
 • 1-0
izyuu
(2039)
+0.7
SpaceOrion
(1437)
-1.3

3 | 2
Atomic
Mar 21 7:16 AM
 • 1'
 • 13
p
 • 1-0
izyuu
(2038)
+0.8
RexChessman
(1457)
-1.7

3 | 2
Atomic
Mar 21 7:15 AM
 • 2'
 • 13
p
 • 1-0
izyuu
(2037)
+1.2
type1dragon
(1547)
-0.9

3 | 2
Atomic
Mar 21 7:11 AM
 • 3'
 • 23
p
 • 1-0
izyuu
(2032)
+4.9
halzoun
(1823)
-3.7

3 | 2
Atomic
Mar 21 7:08 AM
 • 2'
 • 14
p
 • 1-0
izyuu
(2029)
+3
JaKeWhItE34
(1713)
-2.2

3 | 2
Atomic
Mar 20 4:07 PM
 • 1'
 • 13
p
 • 0-1
Ar0ne
(2078)
+10.1
izyuu
(2038)
-9.2

3 | 2
Atomic
Mar 20 4:01 PM
 • 4'
 • 24
p
 • 0-1
izyuu
(2030)
+8.1
quintencabo
(1941)
-7

3 | 2
Atomic
Mar 20 3:55 PM
 • 7'
 • 30
p
 • 1-0
gan_dalf1
(1993)
+8.1
izyuu
(2042)
-12.6

3 | 2
Atomic
Mar 20 3:52 PM
 • 3'
 • 23
p
 • 1-0
izyuu
(2040)
+1.9
jamesoppongagyare
(1618)
-1.3

3 | 2
Atomic
Mar 20 3:52 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2040)
+0.7
hypershadic302
(1417)
-1

3 | 2
Atomic
Mar 20 3:51 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2039)
+0.7
hypershadic302
(1418)
-1

3 | 2
Atomic
Mar 20 3:50 PM
 • 1'
 • 11
p
 • 1-0
izyuu
(2037)
+2.3
Noah_Gav
(1659)
-1.7

3 | 2
Atomic
Mar 20 3:48 PM
 • 3'
 • 16
p
 • 0-1
izyuu
(2034)
+2.4
Noah_Gav
(1661)
-1.7

3 | 2
Atomic
Mar 20 3:46 PM
 • 2'
 • 20
p
 • 0-1
izyuu
(2033)
+1.3
captaincookie3
(1541)
-1

3 | 2
Atomic
Mar 20 1:00 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(2032)
+1
doruks0550
(1486)
-1

3 | 2
Atomic
Mar 20 12:59 PM
 • 2'
 • 15
p
 • 1-0
izyuu
(2031)
+1.4
DustyIcicle
(1550)
-1.6

3 | 2
Atomic
Mar 20 12:58 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2030)
+0.7
william229101
(1413)
-1.1

3 | 2
Atomic
Mar 20 12:58 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(2029)
+0.7
william229101
(1414)
-1.1

3 | 2
Atomic
Mar 20 12:53 PM
 • 4'
 • 35
p
 • 0-1
izyuu
(2027)
+2.7
DarlingDalek782
(1687)
-1.9

3 | 2
Atomic
Mar 20 12:48 PM
 • 6'
 • 31
p
 • 1-0
izyuu
(2022)
+4.9
minizoec
(1809)
-3.8

3 | 2
Atomic
Mar 20 12:28 PM
 • 3'
 • 21
p
 • 1-0
izyuu
(2016)
+5.9
jacobear
(1847)
-4.1

3 | 2
Atomic
Mar 20 5:49 AM
 • 2'
 • 16
p
 • 1-0
izyuu
(2010)
+5.5
gohjialoonmoe
(1819)
-4.8

3 | 2
Atomic
Mar 18 12:01 AM
 • 4'
 • 30
p
 • 1-0
amaclaire
(2183)
+6.3
izyuu
(2016)
-6.2

3 | 2
Atomic
Mar 18 12:00 AM
 • 1'
 • 11
p
 • 1-0
izyuu
(2016)
+0.7
Zack13579
(1397)
-1.1

3 | 2
Atomic
Mar 17 11:59 PM
 • 1'
 • 13
p
 • 1-0
izyuu
(2015)
+0.7
rafflewitz
(1398)
-1.1

3 | 2
Atomic
Mar 17 11:58 PM
 • 1'
 • 12
p
 • 0-1
izyuu
(2014)
+1.1
ZhenYang2012
(1487)
-0.8

3 | 2
Atomic
Mar 17 11:54 PM
 • 4'
 • 30
p
 • 0-1
izyuu
(2013)
+1.4
gonidis
(1520)
-2.9

3 | 2
Atomic
Mar 17 11:53 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2011)
+1.2
MalingSapatu
(1499)
-2.9

3 | 2
Atomic
Mar 17 11:51 PM
 • 2'
 • 8
p
 • 1-0
EagleOnHigh
(2412)
+2.5
izyuu
(2013)
-2.1

3 | 2
Atomic
Mar 17 11:48 PM
 • 3'
 • 21
p
 • 0-1
EagleOnHigh
(2409)
+2.5
izyuu
(2016)
-2.1

3 | 2
Atomic
Mar 17 11:39 PM
 • 6'
 • 50
p
 • 1-0
EagleOnHigh
(2406)
+2.6
izyuu
(2018)
-2.2

3 | 2
Atomic
Mar 17 11:32 PM
 • 7'
 • 29
p
 • 0-1
Mstake1
(2181)
+6.7
izyuu
(2024)
-6.2

3 | 2
Atomic
Mar 17 11:26 PM
 • 5'
 • 30
p
 • 1-0
benigncyclops
(2098)
+8.1
izyuu
(2033)
-8.8

3 | 2
Atomic
Mar 17 11:24 PM
 • 2'
 • 21
p
 • 0-1
izyuu
(2028)
+5.1
AnhHoang41
(1814)
-4

3 | 2
Atomic
Mar 17 11:21 PM
 • 2'
 • 21
p
 • 0-1
izyuu
(2019)
+8.1
bidzinaP
(1917)
-5.3

3 | 2
Atomic
Mar 17 11:20 PM
 • 1'
 • 9
p
 • 0-1
izyuu
(2018)
+1.8
ic07ic07
(1577)
-3

3 | 2
Atomic
Mar 17 11:10 PM
 • 1'
 • 8
p
 • 1-0
PointsmanW
(2167)
+7.6
izyuu
(2025)
-7.1

3 | 2
Atomic
Mar 17 10:50 PM
 • 3'
 • 20
p
 • 0-1
izyuu
(2021)
+3.4
XiRiQ_7
(1705)
-2.3

3 | 2
Atomic
Mar 17 10:48 PM
 • 3'
 • 27
p
 • 1-0
izyuu
(2020)
+0.8
O_Mccain34
(1425)
-1.2

3 | 2
Atomic
Mar 17 10:47 PM
 • 1'
 • 13
p
 • 0-1
izyuu
(2019)
+1.1
DaveTheGreatChesser
(1479)
-0.7

3 | 2
Atomic
Mar 17 10:46 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2018)
+1.3
Chrispy33
(1501)
-1.9

3 | 2
Atomic
Mar 17 10:44 PM
 • 2'
 • 18
p
 • 0-1
izyuu
(2016)
+1.9
hubertspubertstrue
(1587)
-1.4

3 | 2
Atomic
Mar 17 10:36 PM
 • 6'
 • 45
p
 • 0-1
benigncyclops
(2102)
+8.1
izyuu
(2025)
-9

3 | 2
Atomic
Mar 17 10:35 PM
 • 2'
 • 13
p
 • 1-0
izyuu
(2024)
+1.2
rich940628
(1498)
-0.8

3 | 2
Atomic
Mar 17 8:44 PM
 • 2'
 • 14
p
 • 0-1
izyuu
(2023)
+1.3
maestro_rohan
(1509)
-2.4

3 | 2
Atomic
Mar 17 8:22 PM
 • 1'
 • 12
p
 • 0-1
izyuu
(2022)
+0.5
ezrajacobmendoza
(1339)
-0.4

3 | 2
Atomic
Mar 17 8:16 PM
 • 5'
 • 33
p
 • 1-0
izyuu
(2016)
+6.3
Jigglypuffiscute
(1843)
-4.2

3 | 2
Atomic
Mar 17 8:15 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(2015)
+1.3
chrisc1105
(1500)
-2.8

3 | 2
Atomic
Mar 17 8:06 PM
 • 2'
 • 16
p
 • 0-1
izyuu
(2010)
+4.5
Temperus
(1753)
-2.8

3 | 2
Atomic
Mar 17 8:05 PM
 • 1'
 • 14
p
 • 1-0
madwhizfromsilverkeep
(2264)
+2.9
izyuu
(2015)
-4.7

3 | 2
Atomic
Mar 17 8:04 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2014)
+0.9
markzuccyburgermark2
(1429)
-1

3 | 2
Atomic
Mar 17 8:04 PM
 • 1'
 • 6
p
 • 0-1
izyuu
(2013)
+1
theHomelander1
(1451)
-1.8

3 | 2
Atomic
Mar 17 8:03 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(2012)
+1.4
Baylor_Mustaine
(1515)
-2.3

3 | 2
Atomic
Mar 17 7:52 PM
 • 2'
 • 12
p
 • 0-1
izyuu
(2010)
+1.8
KingsBishop180
(1558)
-2.4

3 | 2
Atomic
Mar 17 7:42 PM
 • 1'
 • 11
p
 • 0-1
izyuu
(2009)
+0.5
Brodontcare
(1317)
-0.4

3 | 2
Atomic
Mar 17 7:42 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2009)
+0.5
Brodontcare
(1317)
-0.4

3 | 2
Atomic
Mar 17 7:41 PM
 • 1'
 • 9
p
 • 0-1
izyuu
(2008)
+0.5
Brodontcare
(1317)
-0.4

3 | 2
Atomic
Mar 17 7:40 PM
 • 1'
 • 6
p
 • 1-0
izyuu
(2006)
+2.2
ItsCheffington
(1609)
-1.6

3 | 2
Atomic
Mar 17 7:39 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2005)
+1.5
aerco
(1536)
-1.9

3 | 2
Atomic
Mar 17 7:37 PM
 • 3'
 • 26
p
 • 0-1
izyuu
(2003)
+1.2
554835DL
(1485)
-1.2

3 | 2
Atomic
Mar 17 7:35 PM
 • 2'
 • 13
p
 • 1-0
554835DL
(1464)
+21.3
izyuu
(2025)
-21.2

3 | 2
Atomic
Mar 17 6:57 PM
 • 1'
 • 11
p
 • 1-0
izyuu
(2021)
+3.6
DuolingoKilledMyFamily
(1732)
-2.8

3 | 2
Atomic
Mar 17 6:56 PM
 • 1'
 • 5
p
 • 1-0
izyuu
(2020)
+1.2
Ageemus
(1510)
-2

3 | 2
Atomic
Mar 17 6:56 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2018)
+1.5
ShivenisEpicDude
(1548)
-1.4

3 | 2
Atomic
Mar 17 6:28 PM
 • 7'
 • 59
p
 • 1-0
izyuu
(2010)
+8.2
nestormartinezreyes
(1919)
-6.1

3 | 2
Atomic
Mar 17 6:23 PM
 • 2'
 • 14
p
 • 1-0
qwertyuiopasdfghjklzxcv15
(1658)
+14.4
izyuu
(2030)
-20

3 | 2
Atomic
Mar 17 6:21 PM
 • 2'
 • 16
p
 • 0-1
izyuu
(2024)
+5.9
WB7694
(1841)
-3.9

3 | 2
Atomic
Mar 17 6:19 PM
 • 2'
 • 32
p
 • 0-1
izyuu
(2023)
+0.9
radmaster_rad_shark
(1441)
-1

3 | 2
Atomic
Mar 17 6:18 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2023)
+0.9
radmaster_rad_shark
(1442)
-1

3 | 2
Atomic
Mar 17 6:17 PM
 • 1'
 • 8
p
 • 0-1
izyuu
(2022)
+0.9
radmaster_rad_shark
(1443)
-1

3 | 2
Atomic
Mar 17 11:58 AM
 • 3'
 • 20
p
 • 1-0
izyuu
(2017)
+4.4
philxtaxy3
(1772)
-3

3 | 2
Atomic
Mar 16 9:24 PM
 • 1'
 • 15
p
 • 1-0
izyuu
(2016)
+0.9
myb131232
(1445)
-1

3 | 2
Atomic
Mar 16 9:17 PM
 • 6'
 • 44
p
 • 0-1
izyuu
(2015)
+1.7
CrimsonBreath
(1564)
-2.5

3 | 2
Atomic
Mar 16 7:20 PM
 • 5'
 • 21
p
 • 0-1
fuzzycreeper321
(1780)
+12.6
izyuu
(2033)
-17.8

3 | 2
Atomic
Mar 16 7:16 PM
 • 3'
 • 29
p
 • 1-0
izyuu
(2031)
+2
BlueberryCatsXD
(1617)
-1.4

3 | 2
Atomic
Mar 16 7:15 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2030)
+0.9
BreakingPoint2
(1461)
-0.6

3 | 2
Atomic
Mar 16 7:14 PM
 • 1'
 • 12
p
 • 0-1
izyuu
(2029)
+1.1
hiimsam_1
(1495)
-1

3 | 2
Atomic
Mar 16 7:11 PM
 • 3'
 • 24
p
 • 0-1
izyuu
(2027)
+1.2
MatthiasR11
(1500)
-2.6

3 | 2
Atomic
Mar 16 7:09 PM
 • 2'
 • 8
p
 • 0-1
izyuu
(2026)
+1.1
Harumachi_Clover
(1497)
-2.6

3 | 2
Atomic
Mar 16 7:08 PM
 • 2'
 • 7
p
 • 1-0
izyuu
(2025)
+1.1
Harumachi_Clover
(1500)
-2.7

3 | 2
Atomic
Mar 16 7:07 PM
 • 1'
 • 8
p
 • 0-1
izyuu
(2024)
+1.1
MaxaMillion33
(1500)
-2.7

3 | 2
Atomic
Mar 16 7:06 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2023)
+1.2
leosscope
(1518)
-2.3

3 | 2
Atomic
Mar 16 7:05 PM
 • 1'
 • 16
p
 • 0-1
izyuu
(2022)
+1.2
leosscope
(1520)
-2.3

3 | 2
Atomic
Mar 16 7:04 PM
 • 2'
 • 15
p
 • 1-0
izyuu
(2020)
+1.3
phyccasis
(1528)
-2.4

3 | 2
Atomic
Mar 16 7:01 PM
 • 2'
 • 16
p
 • 0-1
izyuu
(2019)
+1
trebooor
(1482)
-1.1

3 | 2
Atomic
Mar 16 6:29 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2018)
+1
dudutoptop
(1491)
-2.1

3 | 2
Atomic
Mar 16 6:26 PM
 • 3'
 • 14
p
 • 0-1
izyuu
(2017)
+1.5
noobfart
(1568)
-2.9

3 | 2
Atomic
Mar 16 6:17 PM
 • 7'
 • 42
p
 • 1-0
izyuu
(2013)
+3.9
weilxiong
(1763)
-3.2

3 | 2
Atomic
Mar 16 6:16 PM
 • 2'
 • 15
p
 • 1-0
izyuu
(2008)
+5.2
marktormanen
(1824)
-4.4

3 | 2
Atomic
Mar 16 6:15 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(2006)
+1.9
3141o
(1602)
-1.4

3 | 2
Atomic
Mar 16 6:05 PM
 • 7'
 • 42
p
 • 0-1
izyuu
(2001)
+5.2
marktormanen
(1817)
-4.4

3 | 2
Atomic
Mar 16 6:02 PM
 • 2'
 • 23
p
 • 1-0
izyuu
(1997)
+3.3
IrrelevantNoob
(1708)
-2.5

3 | 2
Atomic
Mar 16 5:57 PM
 • 5'
 • 35
p
 • 0-1
izyuu
(1986)
+11.4
Tctitans
(2033)
-11.7

3 | 2
Atomic
Mar 16 5:56 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(1985)
+1
CJorkoltt
(1445)
-1.3

3 | 2
Atomic
Mar 16 5:55 PM
 • 1'
 • 17
p
 • 1-0
izyuu
(1983)
+1.8
Zmanitee
(1570)
-1.6

3 | 2
Atomic
Mar 16 5:54 PM
 • 2'
 • 17
p
 • 1-0
izyuu
(1980)
+3.2
flam111075
(1678)
-2.4

3 | 2
Atomic
Mar 16 5:53 PM
 • 1'
 • 6
p
 • 0-1
izyuu
(1979)
+1
CibinsBadatChess
(1442)
-1.9

3 | 2
Atomic
Mar 16 5:51 PM
 • 3'
 • 26
p
 • 0-1
izyuu
(1978)
+0.9
ferret48
(1423)
-1.6

3 | 2
Atomic
Mar 16 5:51 PM
 • 1'
 • 4
p
 • 0-1
izyuu
(1976)
+1.7
Kmametyarov
(1551)
-3.3

3 | 2
Atomic
Mar 16 5:50 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(1974)
+1.8
Kmametyarov
(1554)
-3.5

3 | 2
Atomic
Mar 16 5:49 PM
 • 1'
 • 8
p
 • 0-1
izyuu
(1973)
+1.8
Kmametyarov
(1558)
-3.7

3 | 2
Atomic
Mar 16 5:47 PM
 • 2'
 • 11
p
 • 0-1
izyuu
(1971)
+1.9
Battleskull14
(1579)
-1.5

3 | 2
Atomic
Mar 16 5:46 PM
 • 1'
 • 12
p
 • 0-1
izyuu
(1967)
+3.3
Skadieye12
(1683)
-2.7

3 | 2
Atomic
Mar 16 5:45 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(1964)
+3.4
Skadieye12
(1686)
-2.8

3 | 2
Atomic
Mar 16 5:43 PM
 • 3'
 • 33
p
 • 1-0
izyuu
(1961)
+3.5
Skadieye12
(1689)
-2.9

3 | 2
Atomic
Mar 15 9:29 PM
 • 2'
 • 22
p
 • 1-0
damazien
(1768)
+12.5
izyuu
(1976)
-15.1

3 | 2
Atomic
Mar 15 9:27 PM
 • 2'
 • 20
p
 • 1-0
izyuu
(1971)
+4.9
damazien
(1772)
-4.1

3 | 2
Atomic
Mar 15 9:27 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(1969)
+1.4
SmartMasi
(1496)
-3.4

3 | 2
Atomic
Mar 15 12:41 PM
 • 1'
 • 11
p
 • 1-0
izyuu
(1968)
+1.7
skill10000
(1550)
-1.5

3 | 2
Atomic
Mar 14 8:04 PM
 • 5'
 • 49
p
 • 0-1
bimbow
(2081)
+5.3
izyuu
(1975)
-7.1

3 | 2
Atomic
Mar 13 6:00 PM
 • 1'
 • 6
p
 • 0-1
izyuu
(1966)
+8.8
cabigaillin
(1920)
-6.7

3 | 2
Atomic
Mar 13 6:00 PM
 • 1'
 • 4
p
 • 0-1
izyuu
(1965)
+1.2
TheLegendover9000
(1461)
-2.2

3 | 2
Atomic
Mar 13 12:18 PM
 • 5'
 • 34
p
 • 0-1
Renanlima2004
(1952)
+7.8
izyuu
(1976)
-11

3 | 2
Atomic
Mar 13 12:14 PM
 • 3'
 • 26
p
 • 1-0
izyuu
(1971)
+4.5
yesyesyesyesyesyesyeysye
(1740)
-3.5

3 | 2
Atomic
Mar 10 5:28 PM
 • 3'
 • 19
p
 • 0-1
trxmark
(2023)
+9
izyuu
(1980)
-9.3

3 | 2
Atomic
Mar 10 5:27 PM
 • 2'
 • 13
p
 • 1-0
izyuu
(1978)
+2.3
idontwantot
(1593)
-2.9

3 | 2
Atomic
Mar 10 1:32 PM
 • 1'
 • 8
p
 • 0-1
izyuu
(1977)
+1.2
Cakebake324
(1476)
-1.4

3 | 2
Atomic
Mar 10 11:16 AM
 • 3'
 • 33
p
 • 1-0
izyuu
(1975)
+1.7
shreejal2
(1535)
-2.6

3 | 2
Atomic
Mar 10 11:13 AM
 • 3'
 • 23
p
 • 1-0
izyuu
(1973)
+2.2
Smagalons
(1582)
-3.6

3 | 2
Atomic
Mar 10 11:11 AM
 • 2'
 • 17
p
 • 1-0
izyuu
(1969)
+3.7
Firmsy632
(1689)
-2.6

3 | 2
Atomic
Mar 10 11:10 AM
 • 2'
 • 11
p
 • 1-0
izyuu
(1969)
+0.8
loganbrungard
(1382)
-0.7

3 | 2
Atomic
Mar 10 11:09 AM
 • 1'
 • 9
p
 • 1-0
izyuu
(1967)
+1.5
Pieroani
(1500)
-3.6

3 | 2
Atomic
Mar 10 11:08 AM
 • 1'
 • 10
p
 • 0-1
izyuu
(1965)
+1.9
komopmen
(1549)
-1.4

3 | 2
Atomic
Mar 10 11:07 AM
 • 2'
 • 17
p
 • 1-0
izyuu
(1964)
+1.3
Mantikor3Go
(1470)
-2.8

3 | 2
Atomic
Mar 10 11:06 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(1963)
+1.3
Mantikor3Go
(1473)
-2.9

3 | 2
Atomic
Mar 10 10:59 AM
 • 7'
 • 38
p
 • 1-0
izyuu
(1961)
+1.5
Shreejit2003
(1502)
-3.1

3 | 2
Atomic
Mar 10 10:58 AM
 • 2'
 • 13
p
 • 1-0
izyuu
(1960)
+1.3
MannteCanarias
(1482)
-1.5

3 | 2
Atomic
Mar 10 10:57 AM
 • 1'
 • 10
p
 • 0-1
izyuu
(1958)
+1.3
MrRizz98
(1474)
-1.8

3 | 2
Atomic
Mar 10 10:57 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(1957)
+1.3
MrRizz98
(1476)
-1.8

3 | 2
Atomic
Mar 10 10:55 AM
 • 2'
 • 18
p
 • 0-1
izyuu
(1956)
+1
bigboylildicky
(1430)
-1.4

3 | 2
Atomic
Mar 10 10:55 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(1955)
+1
bigboylildicky
(1431)
-1.4

3 | 2
Atomic
Mar 10 10:54 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(1954)
+1
25thL
(1440)
-1.4

3 | 2
Atomic
Mar 10 8:53 AM
 • 2'
 • 18
p
 • 0-1
izyuu
(1953)
+1.2
chesschildj
(1461)
-2.6

3 | 2
Atomic
Mar 10 8:52 AM
 • 1'
 • 4
p
 • 0-1
izyuu
(1952)
+1.2
chesschildj
(1463)
-2.7

3 | 2
Atomic
Mar 10 8:51 AM
 • 1'
 • 9
p
 • 1-0
izyuu
(1950)
+1.6
KyleCMartin
(1523)
-1.3

3 | 2
Atomic
Mar 10 8:28 AM
 • 8'
 • 62
p
 • 1-0
izyuu
(1942)
+8.6
juggla
(1914)
-7.6

3 | 2
Atomic
Mar 10 8:26 AM
 • 2'
 • 20
p
 • 0-1
izyuu
(1940)
+1.5
easportsiaminyourwalls
(1506)
-1.2

3 | 2
Atomic
Mar 10 8:16 AM
 • 2'
 • 18
p
 • 0-1
izyuu
(1924)
+16.5
dragonfire2
(2296)
-24.2

3 | 2
Atomic
Mar 10 8:16 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(1922)
+1.5
inkpoe
(1478)
-3.5

3 | 2
Atomic
Mar 10 8:05 AM
 • 2'
 • 14
p
 • 1-0
amaclaire
(2155)
+6.3
izyuu
(1926)
-4

3 | 2
Atomic
Mar 10 7:59 AM
 • 4'
 • 36
p
 • 0-1
izyuu
(1916)
+10.4
MariusCerlat
(1956)
-8.6

3 | 2
Atomic
Mar 10 7:55 AM
 • 2'
 • 10
p
 • 0-1
izyuu
(1914)
+1.8
Masroor_A
(1499)
-4.7

3 | 2
Atomic
Mar 10 7:54 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(1912)
+1.6
owenkaigriffin
(1486)
-1.3

3 | 2
Atomic
Mar 10 7:53 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(1911)
+1.4
sinsincitywasntmadeforya
(1454)
-3.1

3 | 2
Atomic
Mar 10 7:51 AM
 • 2'
 • 12
p
 • 0-1
izyuu
(1909)
+1.7
The-swordsman
(1494)
-3.9

3 | 2
Atomic
Mar 10 7:49 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(1907)
+2.5
etis6ft
(1578)
-2

3 | 2
Atomic
Mar 10 7:47 AM
 • 3'
 • 13
p
 • 0-1
izyuu
(1904)
+2.6
ReyDariov
(1585)
-2.2

3 | 2
Atomic
Mar 10 7:46 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(1903)
+0.8
YOUHAVENODAD0
(1356)
-0.8

3 | 2
Atomic
Mar 10 7:41 AM
 • 6'
 • 30
p
 • 0-1
izyuu
(1895)
+8.6
ionlyplayatomicchess
(1884)
-7.7

3 | 2
Atomic
Mar 10 7:39 AM
 • 1'
 • 4
p
 • 0-1
izyuu
(1893)
+1.7
ADnetwroks
(1485)
-4.4

3 | 2
Atomic
Mar 10 7:37 AM
 • 2'
 • 18
p
 • 0-1
izyuu
(1888)
+4.7
matthman0107
(1707)
-4

3 | 2
Atomic
Mar 10 7:35 AM
 • 3'
 • 23
p
 • 1-0
izyuu
(1886)
+2
OneAndOnly-Madhav
(1513)
-4.2

3 | 2
Atomic
Mar 9 6:58 PM
 • 3'
 • 25
p
 • 0-1
izyuu
(1884)
+2.4
ChristianSamp
(1554)
-3.5

3 | 2
Atomic
Mar 9 6:57 PM
 • 1'
 • 10
p
 • 0-1
izyuu
(1882)
+1.7
fambam15gtz
(1481)
-2.4

3 | 2
Atomic
Mar 9 6:56 PM
 • 1'
 • 10
p
 • 0-1
izyuu
(1881)
+1.7
fambam15gtz
(1483)
-2.4

3 | 2
Atomic
Mar 9 6:54 PM
 • 2'
 • 22
p
 • 0-1
fortnitegameattacker
(1646)
+12.4
izyuu
(1895)
-14.1

3 | 2
Atomic
Mar 9 6:32 PM
 • 2'
 • 14
p
 • 0-1
izyuu
(1893)
+1.2
levi6706
(1419)
-2.5

3 | 2
Atomic
Mar 9 6:30 PM
 • 2'
 • 15
p
 • 1-0
izyuu
(1891)
+2.5
spudl1
(1578)
-2.2

3 | 2
Atomic
Mar 9 6:29 PM
 • 1'
 • 8
p
 • 0-1
izyuu
(1888)
+2.6
spudl1
(1581)
-2.2

3 | 2
Atomic
Mar 9 6:29 PM
 • 1'
 • 12
p
 • 0-1
izyuu
(1887)
+1.4
pascualtrujillo
(1454)
-2.4

3 | 2
Atomic
Mar 9 6:27 PM
 • 2'
 • 15
p
 • 1-0
izyuu
(1884)
+2.6
nicename55
(1578)
-2.6

3 | 2
Atomic
Mar 9 6:26 PM
 • 2'
 • 6
p
 • 0-1
izyuu
(1884)
+0.8
zullncoy000
(1353)
-1

3 | 2
Atomic
Mar 9 11:33 AM
 • 5'
 • 29
p
 • 1-0
izyuu
(1873)
+10.2
Refiur
(1959)
-10.8

3 | 2
Atomic
Mar 9 11:27 AM
 • 6'
 • 30
p
 • 0-1
Refiur
(1952)
+7.1
izyuu
(1880)
-6.7

3 | 2
Atomic
Mar 9 11:26 AM
 • 2'
 • 20
p
 • 1-0
Refiur
(1944)
+7.5
izyuu
(1887)
-7.1

3 | 2
Atomic
Mar 9 11:22 AM
 • 5'
 • 33
p
 • 1-0
izyuu
(1877)
+10.3
Refiur
(1955)
-11.1

3 | 2
Atomic
Mar 9 11:20 AM
 • 2'
 • 14
p
 • 0-1
izyuu
(1866)
+11
Refiur
(1967)
-11.8

3 | 2
Atomic
Mar 9 11:19 AM
 • 1'
 • 12
p
 • 1-0
BIGDAWG
(2016)
+4.5
izyuu
(1871)
-5.4

3 | 2
Atomic
Mar 9 11:14 AM
 • 6'
 • 44
p
 • 1-0
Bradyrex223
(1771)
+10.7
izyuu
(1883)
-11.5

3 | 2
Atomic
Mar 9 7:57 AM
 • 2'
 • 17
p
 • 0-1
ELMESAS-Tw
(1846)
+9
izyuu
(1893)
-10.1

3 | 2
Atomic
Mar 9 7:51 AM
 • 6'
 • 34
p
 • 1-0
Kryptops
(1893)
+8.2
izyuu
(1902)
-9.2

3 | 2
Atomic
Mar 9 7:50 AM
 • 2'
 • 14
p
 • 1-0
PandaFrame
(2026)
+6
izyuu
(1908)
-6.2

3 | 2
Atomic
Mar 9 7:48 AM
 • 1'
 • 11
p
 • 0-1
Ryan_Funk-Clark_NPA
(2213)
+3.8
izyuu
(1911)
-2.9

3 | 2
Atomic
Mar 9 7:44 AM
 • 5'
 • 26
p
 • 1-0
User_AI
(1794)
+11.2
izyuu
(1924)
-12.5

3 | 2
Atomic
Mar 9 7:22 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(1920)
+3.2
F1speedrun
(1639)
-3.1

3 | 2
Atomic
Mar 9 7:21 AM
 • 1'
 • 11
p
 • 1-0
izyuu
(1918)
+2.2
na-star123
(1553)
-4.4

3 | 2
Atomic
Mar 9 7:21 AM
 • 1'
 • 4
p
 • 0-1
izyuu
(1916)
+1.7
bartj16789
(1500)
-4.6

3 | 2
Atomic
Mar 9 7:20 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(1912)
+4.2
SlimmJt
(1691)
-3.4

3 | 2
Atomic
Mar 9 6:52 AM
 • 1'
 • 12
p
 • 0-1
izyuu
(1910)
+2
dhauwdh
(1521)
-4.8

3 | 2
Atomic
Mar 8 11:33 AM
 • 2'
 • 16
p
 • 0-1
izyuu
(1908)
+2.6
WhoMe3
(1582)
-2.3

3 | 2
Atomic
Mar 8 11:28 AM
 • 6'
 • 60
p
 • 0-1
WhoMe3
(1568)
+14.3
izyuu
(1924)
-16.4

3 | 2
Atomic
Mar 8 11:26 AM
 • 2'
 • 12
p
 • 1-0
izyuu
(1922)
+2.2
WhoMe3
(1570)
-1.9

3 | 2
Atomic
Mar 8 11:09 AM
 • 2'
 • 18
p
 • 1-0
CamPeonsinCorona
(1960)
+7.6
izyuu
(1930)
-8.4

3 | 2
Atomic
Mar 8 11:08 AM
 • 1'
 • 9
p
 • 1-0
izyuu
(1929)
+1.3
pokemqsterce
(1462)
-1.6

3 | 2
Atomic
Mar 8 8:04 AM
 • 7'
 • 60
p
 • 1-0
izyuu
(1919)
+10.1
Faterino
(1953)
-10.5

3 | 2
Atomic
Mar 8 8:02 AM
 • 2'
 • 17
p
 • 1-0
izyuu
(1918)
+1.2
baban15082008
(1441)
-2

3 | 2
Atomic
Mar 8 8:02 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(1917)
+1.1
Jaycer20xx
(1424)
-2.2

3 | 2
Atomic
Mar 8 7:35 AM
 • 2'
 • 4
p
 • 1-0
izyuu
(1915)
+1.7
scoliosiskid21
(1500)
-4.6

3 | 2
Atomic
Mar 8 7:34 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(1913)
+1.9
Mivoru
(1527)
-4.1

3 | 2
Atomic
Mar 8 5:45 AM
 • 1'
 • 7
p
 • 1-0
aristo_17
(1869)
+9.2
izyuu
(1923)
-10.4

3 | 2
Atomic
Mar 8 5:38 AM
 • 6'
 • 49
p
 • 1-0
ZachWorldCrazyBomb1249
(2007)
+7.9
izyuu
(1931)
-7.2

3 | 2
Atomic
Mar 8 5:35 AM
 • 1'
 • 6
p
 • 0-1
izyuu
(1929)
+1.4
fanmu20tyyear
(1473)
-3.4

3 | 2
Atomic
Mar 7 8:49 AM
 • 3'
 • 15
p
 • 0-1
izyuu
(1928)
+1.3
Bread23590
(1468)
-1.2

3 | 2
Atomic
Mar 7 8:46 AM
 • 3'
 • 21
p
 • 1-0
izyuu
(1927)
+1.3
Bread23590
(1469)
-1.2

3 | 2
Atomic
Mar 7 8:40 AM
 • 6'
 • 36
p
 • 0-1
izyuu
(1925)
+1.3
Bread23590
(1470)
-1.2

3 | 2
Atomic
Mar 7 8:36 AM
 • 5'
 • 29
p
 • 1-0
izyuu
(1924)
+1.3
Bread23590
(1472)
-1.2

3 | 2
Atomic
Mar 7 8:35 AM
 • 1'
 • 12
p
 • 0-1
izyuu
(1923)
+1.3
Bread23590
(1473)
-1.2

3 | 2
Atomic
Mar 7 8:34 AM
 • 1'
 • 15
p
 • 1-0
izyuu
(1921)
+1.3
Bread23590
(1474)
-1.2

3 | 2
Atomic
Mar 7 8:34 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(1920)
+1.3
grubyyo
(1472)
-3.1

3 | 2
Atomic
Mar 7 8:30 AM
 • 2'
 • 23
p
 • 1-0
izyuu
(1916)
+4.6
mowtor
(1742)
-4.3

3 | 2
Atomic
Mar 7 8:20 AM
 • 6'
 • 40
p
 • 1-0
viktorveit
(1912)
+9.4
izyuu
(1924)
-8.7

3 | 2
Atomic
Mar 7 8:18 AM
 • 2'
 • 27
p
 • 1-0
izyuu
(1922)
+2.7
Refluxs
(1624)
-2.4

3 | 2
Atomic
Mar 7 8:17 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(1917)
+4.1
JeryyTibbles
(1715)
-4

3 | 2
Atomic
Mar 7 8:14 AM
 • 3'
 • 28
p
 • 0-1
georgeniswar
(1933)
+7.7
izyuu
(1926)
-8.4

3 | 2
Atomic
Mar 7 8:13 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(1917)
+8.6
viktorveit
(1914)
-9.2

3 | 2
Atomic
Mar 7 8:12 AM
 • 1'
 • 10
p
 • 0-1
izyuu
(1908)
+9.1
viktorveit
(1924)
-9.8

3 | 2
Atomic
Mar 7 8:11 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(1898)
+9.8
viktorveit
(1934)
-10.6

3 | 2
Atomic
Mar 7 8:11 AM
 • 1'
 • 9
p
 • 1-0
izyuu
(1897)
+1.8
antonioamayamanzano
(1500)
-5.1

3 | 2
Atomic
Mar 7 8:10 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(1895)
+1.2
SHaquilleOAtmeal12323
(1431)
-1.5

3 | 2
Atomic
Mar 7 8:10 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(1894)
+1.1
aidanward5
(1407)
-2.2

3 | 2
Atomic
Mar 7 8:09 AM
 • 1'
 • 8
p
 • 1-0
izyuu
(1892)
+1.8
Chess_player1211
(1508)
-2.5

3 | 2
Atomic
Mar 6 9:55 PM
 • 1'
 • 16
p
 • 1-0
Microsoft8888
(1869)
+10
izyuu
(1902)
-9.4

3 | 2
Atomic
Mar 6 9:51 PM
 • 4'
 • 34
p
 • 1-0
too_many_rooks_0
(1465)
+30.9
izyuu
(1918)
-15.9

3 | 2
Atomic
Mar 6 9:45 PM
 • 4'
 • 33
p
 • 1-0
izyuu
(1911)
+7.1
Guineapigz2a
(1844)
-6.9

3 | 2
Atomic
Mar 6 9:41 PM
 • 4'
 • 28
p
 • 1-0
WB7694
(1788)
+10.1
izyuu
(1923)
-12

3 | 2
Atomic
Mar 6 9:37 PM
 • 4'
 • 41
p
 • 1-0
izyuu
(1917)
+5.9
WB7694
(1793)
-5

3 | 2
Atomic
Mar 6 9:32 PM
 • 6'
 • 37
p
 • 0-1
rune_raider
(2202)
+3.7
izyuu
(1920)
-3

3 | 2
Atomic
Mar 6 9:31 PM
 • 1'
 • 11
p
 • 1-0
izyuu
(1918)
+1.8
bimharwamle
(1524)
-3.3

3 | 2
Atomic
Mar 6 9:28 PM
 • 3'
 • 16
p
 • 0-1
luvadeouro
(2042)
+5.5
izyuu
(1924)
-6.1

3 | 2
Atomic
Mar 6 9:27 PM
 • 2'
 • 16
p
 • 0-1
izyuu
(1922)
+2
worples
(1544)
-4.1

3 | 2
Atomic
Mar 6 9:24 PM
 • 4'
 • 42
p
 • 0-1
izyuu
(1920)
+2.4
andresjda
(1586)
-2.1

3 | 2
Atomic
Mar 6 9:20 PM
 • 4'
 • 46
p
 • 0-1
izyuu
(1917)
+3
chessyier
(1635)
-2.6

3 | 2
Atomic
Mar 6 9:18 PM
 • 2'
 • 16
p
 • 0-1
izyuu
(1913)
+3.2
bluealphaa
(1645)
-2.8

3 | 2
Atomic
Mar 6 9:18 PM
 • 1'
 • 8
p
 • 0-1
izyuu
(1910)
+3.3
bluealphaa
(1648)
-2.9

3 | 2
Atomic
Mar 6 9:14 PM
 • 4'
 • 42
p
 • 1-0
otavs
(2087)
+4.4
izyuu
(1915)
-4.9

3 | 2
Atomic
Mar 6 8:19 AM
 • 7'
 • 74
p
 • 0-1
SomewhatGoodAtChess
(2134)
+5.2
izyuu
(1919)
-4.1

3 | 2
Atomic
Mar 6 8:11 AM
 • 8'
 • 47
p
 • 1-0
SomewhatGoodAtChess
(2129)
+5.5
izyuu
(1923)
-4.3

3 | 2
Atomic
Mar 6 8:09 AM
 • 3'
 • 20
p
 • 1-0
KPFailsafe
(1988)
+8.7
izyuu
(1931)
-7.6

3 | 2
Atomic
Mar 6 8:03 AM
 • 7'
 • 40
p
 • 1-0
MrNanama
(1915)
+8
izyuu
(1941)
-9.9

3 | 2
Atomic
Mar 6 8:00 AM
 • 3'
 • 16
p
 • 0-1
MrNanama
(1906)
+8.4
izyuu
(1951)
-10.6

3 | 2
Atomic
Mar 6 7:56 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(1942)
+9.6
aaroncastic10
(1946)
-9.5

3 | 2
Atomic
Mar 6 7:19 AM
 • 6'
 • 45
p
 • 0-1
AdrienLindner
(1987)
+8.6
izyuu
(1951)
-8.7

3 | 2
Atomic
Mar 6 7:18 AM
 • 1'
 • 12
p
 • 0-1
izyuu
(1949)
+1.2
Its_YABOIYABOI
(1453)
-1.4

3 | 2
Atomic
Mar 6 7:16 AM
 • 3'
 • 18
p
 • 0-1
izyuu
(1948)
+1.8
ryyaan21
(1538)
-3.1

3 | 2
Atomic
Mar 6 7:15 AM
 • 1'
 • 6
p
 • 0-1
izyuu
(1946)
+1.9
ryyaan21
(1542)
-3.2

3 | 2
Atomic
Mar 6 7:15 AM
 • 1'
 • 10
p
 • 0-1
izyuu
(1942)
+3.5
SkettySpaghetti
(1672)
-2.7

3 | 2
Atomic
Mar 6 7:13 AM
 • 2'
 • 4
p
 • 1-0
izyuu
(1940)
+1.8
evantax33
(1531)
-1.8

3 | 2
Atomic
Mar 6 7:01 AM
 • 2'
 • 13
p
 • 0-1
georgeniswar
(1918)
+9.4
izyuu
(1951)
-10.5

3 | 2
Atomic
Mar 6 6:55 AM
 • 6'
 • 30
p
 • 1-0
izyuu
(1940)
+11.2
gan_dalf1
(1989)
-8.2

3 | 2
Atomic
Mar 6 6:18 AM
 • 2'
 • 5
p
 • 1-0
Goldsb
(1545)
+13.5
izyuu
(1958)
-18.4

3 | 2
Atomic
Mar 6 6:15 AM
 • 4'
 • 22
p
 • 1-0
pelicannnnn
(1541)
+16.9
izyuu
(1977)
-18.4

3 | 2
Atomic
Mar 6 6:14 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(1975)
+1.1
epicercoolboy
(1468)
-1.9

3 | 2
Atomic
Mar 6 6:09 AM
 • 3'
 • 9
p
 • 0-1
izyuu
(1974)
+1.4
rulazk8
(1500)
-3.5

3 | 2
Atomic
Mar 6 6:08 AM
 • 1'
 • 6
p
 • 0-1
izyuu
(1973)
+1
Aadiscool_102938
(1454)
-1.9

3 | 2
Atomic
Mar 6 6:08 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(1972)
+1.5
Goldsb
(1530)
-1.1

3 | 2
Atomic
Mar 6 6:01 AM
 • 7'
 • 48
p
 • 1-0
georgeniswar
(1893)
+10.3
izyuu
(1983)
-11.9

3 | 2
Atomic
Mar 6 6:00 AM
 • 1'
 • 9
p
 • 0-1
izyuu
(1982)
+1.2
eggslip
(1499)
-1.4

3 | 2
Atomic
Mar 6 5:58 AM
 • 2'
 • 12
p
 • 0-1
izyuu
(1980)
+1.7
Aleksadrr
(1567)
-1.3

3 | 2
Atomic
Mar 6 5:53 AM
 • 5'
 • 28
p
 • 0-1
izyuu
(1975)
+5.9
Refenestrated
(1832)
-4.7

3 | 2
Atomic
Mar 6 5:52 AM
 • 2'
 • 22
p
 • 0-1
izyuu
(1973)
+1.1
vuduclam9999
(1480)
-1.2

3 | 2
Atomic
Mar 6 5:50 AM
 • 2'
 • 13
p
 • 0-1
izyuu
(1973)
+0.8
yakchess3
(1418)
-0.9

3 | 2
Atomic
Mar 6 5:50 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(1972)
+0.8
Henrythechessmast
(1415)
-1

3 | 2
Atomic
Mar 6 5:49 AM
 • 1'
 • 11
p
 • 1-0
izyuu
(1971)
+1.2
rooneyrai
(1491)
-3.2

3 | 2
Atomic
Mar 6 5:41 AM
 • 7'
 • 49
p
 • 0-1
SilverPotato652
(2116)
+5.4
izyuu
(1976)
-5.7

3 | 2
Atomic
Mar 6 5:37 AM
 • 4'
 • 35
p
 • 0-1
izyuu
(1963)
+13.2
SilverPotato652
(2129)
-12.5

3 | 2
Atomic
Mar 6 5:33 AM
 • 4'
 • 35
p
 • 1-0
izyuu
(1949)
+13.9
SilverPotato652
(2142)
-13.1

3 | 2
Atomic
Mar 6 5:31 AM
 • 3'
 • 18
p
 • 1-0
SilverPotato652
(2137)
+4.7
izyuu
(1954)
-4.9

3 | 2
Atomic
Mar 4 1:21 PM
 • 6'
 • 54
p
 • 0-1
izyuu
(1950)
+3.8
cheeze9
(1707)
-3.1

3 | 2
Atomic
Mar 4 1:12 PM
 • 8'
 • 53
p
 • ½-½
NM_NHTT
(1985)
-0.8
izyuu
(1949)
+0.9

3 | 2
Atomic
Mar 4 12:43 PM
 • 7'
 • 60
p
 • 0-1
izyuu
(1941)
+8.4
jason_cs
(1893)
-8

3 | 2
Atomic
Mar 4 12:43 PM
 • 1'
 • 6
p
 • 0-1
izyuu
(1940)
+1.5
krytojWednesday
(1491)
-2.8

3 | 2
Atomic
Mar 4 12:41 PM
 • 2'
 • 16
p
 • 0-1
izyuu
(1938)
+1.8
flyiu
(1526)
-2.7

3 | 2
Atomic
Mar 4 12:37 PM
 • 4'
 • 30
p
 • 0-1
izyuu
(1933)
+4.5
romeosGR
(1719)
-3.5

3 | 2
Atomic
Mar 4 12:36 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(1931)
+2
jackdarv
(1536)
-2.8

3 | 2
Atomic
Mar 4 12:33 PM
 • 3'
 • 16
p
 • 0-1
izyuu
(1929)
+2
jackdarv
(1539)
-2.9

3 | 2
Atomic
Mar 4 12:33 PM
 • 1'
 • 3
p
 • 0-1
izyuu
(1928)
+1.4
Haize001
(1470)
-2.9

3 | 2
Atomic
Mar 4 12:32 PM
 • 1'
 • 8
p
 • 0-1
izyuu
(1927)
+0.9
reeveremiel
(1383)
-1.1

3 | 2
Atomic
Mar 4 12:31 PM
 • 1'
 • 9
p
 • 1-0
izyuu
(1925)
+1.7
flyiu
(1510)
-3.9

3 | 2
Atomic
Mar 4 12:31 PM
 • 1'
 • 3
p
 • 0-1
izyuu
(1923)
+1.8
flyiu
(1514)
-4.1

3 | 2
Atomic
Mar 4 12:08 PM
 • 3'
 • 18
p
 • 0-1
izyuu
(1914)
+9.2
ToonToy
(1911)
-9.3

3 | 2
Atomic
Mar 4 12:06 PM
 • 1'
 • 12
p
 • 0-1
winstonhowes
(2280)
+2.8
izyuu
(1916)
-2.2

3 | 2
Atomic
Mar 4 12:06 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(1915)
+1.8
Blainejamin
(1513)
-3.4

3 | 2
Atomic
Mar 4 12:05 PM
 • 1'
 • 7
p
 • 1-0
izyuu
(1913)
+1.8
zardigcg
(1500)
-4.7

3 | 2
Atomic
Mar 4 12:03 PM
 • 3'
 • 14
p
 • 0-1
izyuu
(1911)
+1.9
Menmeni
(1519)
-4.6

3 | 2
Atomic
Mar 4 12:01 PM
 • 2'
 • 10
p
 • 0-1
izyuu
(1909)
+2
Menmeni
(1524)
-4.9

3 | 2
Atomic
Mar 4 12:00 PM
 • 1'
 • 11
p
 • 1-0
izyuu
(1907)
+1.7
snailsy20
(1504)
-1.9

3 | 2
Atomic
Mar 4 11:56 AM
 • 5'
 • 26
p
 • 1-0
Gamingodcat
(1859)
+10.3
izyuu
(1918)
-10.6

3 | 2
Atomic
Mar 4 11:54 AM
 • 1'
 • 9
p
 • 0-1
izyuu
(1916)
+1.3
LeonIncreible
(1450)
-2.5

3 | 2
Atomic
Mar 4 11:53 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(1915)
+1.3
LeonIncreible
(1452)
-2.6

3 | 2
Atomic
Mar 4 11:51 AM
 • 2'
 • 17
p
 • 1-0
izyuu
(1913)
+2.6
Natcraft1100
(1595)
-2.2

3 | 2
Atomic
Mar 4 8:07 AM
 • 8'
 • 45
p
 • 0-1
RasberryChess
(2177)
+3.4
izyuu
(1916)
-3.4

3 | 2
Atomic
Mar 3 8:38 AM
 • 5'
 • 40
p
 • 1-0
aidancourt1
(1791)
+11.4
izyuu
(1928)
-12.4

3 | 2
Atomic
Mar 3 8:38 AM
 • 1'
 • 7
p
 • 1-0
izyuu
(1927)
+1.8
snniper8
(1534)
-1.8

3 | 2
Atomic
Mar 3 8:35 AM
 • 2'
 • 23
p
 • 1-0
izyuu
(1925)
+1.7
Heckith1
(1513)
-3.2

3 | 2
Atomic
Mar 3 8:34 AM
 • 2'
 • 20
p
 • 0-1
izyuu
(1921)
+3.5
Ballistic1x
(1669)
-3

3 | 2
Atomic
Mar 3 8:33 AM
 • 1'
 • 13
p
 • 1-0
izyuu
(1920)
+1.7
Ishan_99
(1516)
-3

3 | 2
Atomic
Mar 3 8:32 AM
 • 1'
 • 5
p
 • 1-0
izyuu
(1918)
+1.6
132007ALeks_andar-1234567
(1502)
-3

3 | 2
Atomic
Mar 3 8:31 AM
 • 1'
 • 10
p
 • 0-1
izyuu
(1917)
+1.4
HenryMcManamy
(1472)
-3.4

3 | 2
Atomic
Mar 3 8:30 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(1915)
+1.4
Ironspider257
(1476)
-3.7

3 | 2
Atomic
Mar 3 8:30 AM
 • 1'
 • 6
p
 • 0-1
izyuu
(1914)
+1.6
ingabogviliene
(1500)
-4.7

3 | 2
Atomic
Mar 3 8:23 AM
 • 6'
 • 70
p
 • ½-½
izyuu
(1914)
-0.5
CamPeonsinCorona
(1894)
+0.5

3 | 2
Atomic
Mar 3 8:20 AM
 • 3'
 • 23
p
 • 0-1
ChrolloLC
(2374)
+1.7
izyuu
(1915)
-1.2

3 | 2
Atomic
Mar 3 8:20 AM
 • 1'
 • 9
p
 • 1-0
LLLLLLLLbozo
(1486)
+16.9
izyuu
(1931)
-15.7

3 | 2
Atomic
Mar 3 8:19 AM
 • 1'
 • 8
p
 • 0-1
izyuu
(1930)
+1.4
Pawn_incoming
(1494)
-2.9

3 | 2
Atomic
Mar 3 8:15 AM
 • 2'
 • 17
p
 • 0-1
Soccerprogamer
(1757)
+10.5
izyuu
(1942)
-12.3

3 | 2
Atomic
Mar 3 7:41 AM
 • 7'
 • 37
p
 • 0-1
JPinheiro
(1845)
+10.3
izyuu
(1953)
-10.7

3 | 2
Atomic
Mar 3 7:34 AM
 • 7'
 • 35
p
 • 0-1
JPinheiro
(1835)
+10.8
izyuu
(1964)
-11.3`
};