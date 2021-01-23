import React from 'react';
import ReactDom from 'react-dom';
import ExampleWork from './example-work';

const myWork=[
  {
    'title': 'Example 1',
    'href': 'images/Access-Deployment.jpg' ,
    'desc' : 'The infrastructure that built up this profile! It begins with a local upload to a github repository, which is then mirrored in the repository stored in GCP. The YAML inside the repository is used on Cloud Build to create the static page, hosted in a GCP storage bucket. The above button shows a workflow diagram of this infrasture.' ,
    'image' : {
      'src' : 'images/example1.jpg',
      'desc' : 'Whitewater rafting with family'
    }
  },
  {
    'title': 'Example 2',
    'href': 'images/Access-Access.jpg' ,
    'desc' : 'The networking that gets the user to the profile. It begins with the user entering the url which redirects to the AWS origin of the DNS records, the SOA. The SOA will check this, and redirect to the name servers on GCP. Since GCP manages IPs in a different way than AWS, the URL redirects to a load balancer that knows the exact location of the GCS bucket hosting this static web page. The above button shows a workflow diagram of this.' ,
    'image' : {
      'src' : 'images/example2.jpg',
      'desc' : 'Kylo Ren using the force with me'
    }
  },
  {
    'title': 'Example 3',
    'href': 'www.example.com' ,
    'desc' : 'Terraform deployment of profile on K8s using a Jenkins CI/CD pipeline. Github is connected to a Jenkins pipeline to automatically watch and deploy new updates of this file through to the associated cloud platforms. Credntials are passed through via ----- for secure access while docker is utilized to actually run the container. The end result is the same as the normal file deployed in example 1, but added steps to make it deployable on any cloud platform via terraform and ' ,
    'image' : {
      'src' : 'images/example3.jpg',
      'desc' : 'Fireworks'
    }
  }
]
ReactDom.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
