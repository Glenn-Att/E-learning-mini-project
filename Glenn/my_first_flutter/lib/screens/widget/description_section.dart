import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class DescriptionSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          "A Flutter course is designed to teach individuals how to develop mobile applications using the Flutter framework. It covers the basics of Flutter, including widgets, layouts, and navigation. Participants learn the Dart programming language, which is used in Flutter development. The course focuses on UI design, state management, networking, and data handling. It also explores testing, debugging, deployment, and app store submission. Participants work on real-world projects and learn performance optimization techniques. By completing the course, participants gain the skills to build cross-platform mobile apps using Flutter and Dart.",
          textAlign: TextAlign.justify,
          style: TextStyle(
            fontSize: 16,
            color: Colors.black.withOpacity(0.7),
          ),
        ),
        SizedBox(height: 20),
        Row(
          children: [
            Icon(
              CupertinoIcons.clock,
              color: Color(0xFF800000),
            ),
            SizedBox(width: 5),
            Text(
              "Duration: 55 hours", // Replace 'X' with the actual duration value
              style: TextStyle(
                fontSize: 14,
                color: Colors.black.withOpacity(0.7),
              ),
            ),
          ],
        ),
        SizedBox(height: 20),
        Row(
          children: [
            SizedBox(width: 5),
            Text(
              "Rating : 4.5", // Replace 'X' with the actual duration value
              style: TextStyle(
                fontSize: 14,
                color: Colors.black.withOpacity(0.7),)
              ),
            Icon(
              CupertinoIcons.star_fill,
              color: Colors.yellow,
            ),
            
          ],
        ),
      ],
    );
  }
}
