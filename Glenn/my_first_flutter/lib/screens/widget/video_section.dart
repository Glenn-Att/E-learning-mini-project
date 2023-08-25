import 'package:flutter/material.dart';

class VideoSection extends StatelessWidget {
  final List<String> videoList = [
    // data for videos
    'Introduction to Flutter',
    'Installing Flutter on Windows',
    'Setting up Flutter on Windows',
    'Installing Flutter on Kali Linux',
    'Setting Up Flutter on Kali Linux',
    'Learning about Widgets',
    'Creating your first application',
  ];

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: videoList.length,
      physics: NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      itemBuilder: (context, index) {
        return ListTile(
          leading: Container(
            padding: EdgeInsets.all(5),
            decoration: BoxDecoration(
              color: index == 0
                  ? Color(0xFF800000)
                  : Color(0xFF800000).withOpacity(0.6),
              shape: BoxShape.circle,
            ),
            child: Text(
              (index + 1).toString(),
              style: TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          title: Text(videoList[index]),
          subtitle: Text("30 min 5 sec "),
        );
      },
    );
  }
}
