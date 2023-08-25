import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:my_first_flutter/screens/courses_screen..dart';

class HomePage extends StatelessWidget {

  
  final List<String> catNames = [
    'Category',
    'Classes',
    'Free Course',
    'Bookstore',
    'Live Course',
    'LeaderBoard',
  ];

  final List<Color> catColors = [
    Color(0xFF008080),
    Color(0xFFC9A9A6),
    Color(0xFF7A7B7A),
    Color(0xFFD8BC70),
    Color(0xFFE3BC9A),
    Color(0xFF78E667),
  ];

  final List<Icon> catIcons = [
    Icon(CupertinoIcons.collections, color: Colors.white, size: 30),
    Icon(CupertinoIcons.video_camera, color: Colors.white, size: 30),
    Icon(CupertinoIcons.doc, color: Colors.white, size: 30),
    Icon(CupertinoIcons.book, color: Colors.white, size: 30),
    Icon(CupertinoIcons.play_circle_fill, color: Colors.white, size: 30),
    Icon(CupertinoIcons.heart, color: Colors.white, size: 30),
  ];

  final List<String> imgList = [
    'Python',
    'Flutter'
  
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: [
          Container(
            padding: EdgeInsets.only(top: 15, left: 15, right: 15, bottom: 10),
            decoration: BoxDecoration(
              color: Color(0xFF800000),
              borderRadius: BorderRadius.only(
                bottomLeft: Radius.circular(20),
                bottomRight: Radius.circular(20),
              ),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Icon(
                      CupertinoIcons.square_grid_2x2,
                      size: 30,
                      color: Colors.white,
                    ),
                    Icon(
                      CupertinoIcons.bell,
                      size: 30,
                      color: Colors.white,
                    ),
                  ],
                ),
                SizedBox(height: 20),
                Padding(
                  padding: EdgeInsets.only(left: 3, bottom: 15),
                  child: Text(
                    "Hello Student",
                    style: TextStyle(
                      fontSize: 25,
                      fontWeight: FontWeight.w600,
                      letterSpacing: 1,
                      wordSpacing: 2,
                      color: Colors.white,
                    ),
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(top: 5, bottom: 20),
                  width: MediaQuery.of(context).size.width,
                  height: 55,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: TextFormField(
                    decoration: InputDecoration(
                      border: InputBorder.none,
                      hintText: "  Enter your course title......",
                      hintStyle: TextStyle(
                        color: Colors.black.withOpacity(0.6),
                      ),
                      prefixIcon: Icon(
                        CupertinoIcons.search,
                        size: 25,
                      ),
                    ),
                  ),
                )
              ],
            ),
          ),
          Padding(
            padding: EdgeInsets.only(top: 20, left: 15, right: 15),
            child: GridView.builder(
              itemCount: catNames.length,
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 3,
                childAspectRatio: 1.1,
              ),
              itemBuilder: (context, index) {
                return Column(
                  children: [
                    Container(
                      height: 60,
                      width: 60,
                      decoration: BoxDecoration(
                        color: catColors[index],
                        shape: BoxShape.circle,
                      ),
                      child: Center(child: catIcons[index]),
                    ),
                    SizedBox(height: 10),
                    Text(
                      catNames[index],
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w500,
                        color: Colors.black.withOpacity(0.7),
                      ),
                    )
                  ],
                );
              },
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 15, vertical: 10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  "Courses",
                  style: TextStyle(
                    fontSize: 23,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                Text(
                  "See All",
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w600,
                    color: Color(0xFF674AEF),
                  ),
                ),
              ],
            ),
          ),
          SizedBox(height: 10),
          GridView.builder(
            itemCount: imgList.length,
            shrinkWrap: true,
            physics: NeverScrollableScrollPhysics(),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 2,
              childAspectRatio:
                  (MediaQuery.of(context).size.height - 50 - 25) / (4 * 240),
              mainAxisSpacing: 10,
              crossAxisSpacing: 10,
            ),
            itemBuilder: (context, index) {
              return InkWell(
                onTap: () {
                  Navigator.push(context,  MaterialPageRoute(
                    builder: (context) => CourseScreen(imgList[index]),
                  ));
                },
                child: Container(
                  padding: EdgeInsets.symmetric(vertical: 20, horizontal: 10),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(20),
                    color: Color(0xFFF5F3FF),
                  ),
                  child: Column(
                    children:[ 
                    Padding(
                      padding: EdgeInsets.all(10),
                      child: Image.asset(
                        "Images/${imgList[index]}.png",
                        width: 100,
                        height: 100,
                      ),
                    ),
                   SizedBox(height: 10),
                   Text(
                    imgList[index],
                    style: TextStyle(
                      fontSize: 22,
                      fontWeight: FontWeight.w600,
                      color: Colors.black.withOpacity(0.6),
                    ),
                   ),

                   SizedBox(height: 10),
                   Text("55 videos",style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w500,
                    color: Colors.black.withOpacity(0.5),
                   ),)

                    ],
                  ),
                ),
              );
            },
          ),
        ],
      ),
      
      bottomNavigationBar: BottomNavigationBar(
        showUnselectedLabels: true,
        iconSize: 32,
        selectedItemColor: Colors.blue,
        selectedFontSize: 18,
        unselectedItemColor: Colors.grey,
        items: [
          BottomNavigationBarItem(icon: Icon(CupertinoIcons.home),label: 'Home'),
          BottomNavigationBarItem(
            icon: Icon(CupertinoIcons.doc),label: 'Courses'),
          BottomNavigationBarItem(
            icon: Icon(CupertinoIcons.heart),label: 'Whislist'),
          BottomNavigationBarItem(
            icon: Icon(CupertinoIcons.person),label: 'Account'),
        ]
        ),
    );
  }
}
