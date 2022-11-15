import { Component, ViewChild, ElementRef } from "@angular/core";
import * as Docco from "@docco/docco-wip";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  @ViewChild("docs") element: ElementRef;

  ngAfterViewInit() {
    const element = this.element.nativeElement;
    Docco.init("https://itsonlyatest.com", element);
  }
}
