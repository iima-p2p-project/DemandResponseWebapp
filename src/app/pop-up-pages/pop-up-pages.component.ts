import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pop-up-pages',
  templateUrl: './pop-up-pages.component.html',
  styleUrls: ['./pop-up-pages.component.scss'],

})
export class PopUpPagesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openPublishEvent() {
    const modalRef = this.modalService.open(PublishEventModalComponent ,{centered: true });
    modalRef.componentInstance.name = 'World';
  }

  openEventSetCustomer() {
    const modalRef = this.modalService.open(EventSetCustomersComponent ,{centered: true });
    modalRef.componentInstance.name = 'World';
  }

  openVersionHistory() {
    const modalRef = this.modalService.open(VersionHistoryComponent ,{centered: true });
    modalRef.componentInstance.name = 'World';
  }

  openDownloadReports() {
    const modalRef = this.modalService.open(DownloadReportsModalComponent ,{centered: true });
    modalRef.componentInstance.name = 'World';
  }

  openAcceptBid() {
    const modalRef = this.modalService.open(AcceptBidModalComponent ,{centered: true });
    modalRef.componentInstance.name = 'World';
  }

  openRejectBidModal() {
    const modalRef = this.modalService.open(RejectBidModalComponent ,{centered: true });
    modalRef.componentInstance.name = 'World';
  }

  addCustomerModalTI()
  {
    const modalRef = this.modalService.open(AddCustomerModalTIComponent ,{ size: 'lg',centered: true }  );
    modalRef.componentInstance.name = 'World';
  } 
  addCustomerModalGI() {
    const modalRef = this.modalService.open(AddCustomerModalGIComponent ,{ size: 'lg',centered: true });
    modalRef.componentInstance.name = 'World';
  }
  addCustomerModalER() {
    const modalRef = this.modalService.open(AddCustomerModalERComponent ,{ size: 'lg',centered: true });
    modalRef.componentInstance.name = 'World';
  }
  AddCustomerBulk() {
    const modalRef = this.modalService.open(AddCustomerBulkComponent ,{ size: 'lg',centered: true });
    modalRef.componentInstance.name = 'World';
  }
}




@Component({
  selector: 'app-publish-event-modal',
  templateUrl: '../Modals/publish-event-modal/publish-event-modal.component.html',
  styleUrls: ['../Modals/publish-event-modal/publish-event-modal.component.scss']
})
export class PublishEventModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-event-set-customers',
  templateUrl: '../CreateEvent/event-set-customers/event-set-customers.component.html',
  styleUrls: ['../CreateEvent/event-set-customers/event-set-customers.component.scss']
})
export class EventSetCustomersComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {}

}
@Component({
  selector: 'app-version-history',
  templateUrl: '../CreateEvent/version-history/version-history.component.html',
  styleUrls: ['../CreateEvent/version-history/version-history.component.scss']
})
export class VersionHistoryComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-download-reports-modal',
  templateUrl: '../Modals/download-reports-modal/download-reports-modal.component.html',
  styleUrls: ['../Modals/download-reports-modal/download-reports-modal.component.scss']
})
export class DownloadReportsModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-accept-bid-modal',
  templateUrl: '../Modals/accept-bid-modal/accept-bid-modal.component.html',
  styleUrls: ['../Modals/accept-bid-modal/accept-bid-modal.component.scss']
})
export class AcceptBidModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-reject-bid-modal',
  templateUrl: '../Modals/reject-bid-modal/reject-bid-modal.component.html',
  styleUrls: ['../Modals/reject-bid-modal/reject-bid-modal.component.scss']
})
export class RejectBidModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-add-customer-modal-ti',
  templateUrl: '../Modals/add-customer-modal-ti/add-customer-modal-ti.component.html',
  styleUrls: ['../Modals/add-customer-modal-ti/add-customer-modal-ti.component.scss']
})
export class AddCustomerModalTIComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-add-customer-modal-gi',
  templateUrl: '../Modals/add-customer-modal-gi/add-customer-modal-gi.component.html',
  styleUrls: ['../Modals/add-customer-modal-gi/add-customer-modal-gi.component.scss']
})
export class AddCustomerModalGIComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-add-customer-modal-er',
  templateUrl: '../Modals/add-customer-modal-er/add-customer-modal-er.component.html',
  styleUrls: ['../Modals/add-customer-modal-er/add-customer-modal-er.component.scss']
})
export class AddCustomerModalERComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-add-customer-bulk',
  templateUrl: '../Modals/add-customer-bulk/add-customer-bulk.component.html',
  styleUrls: ['../Modals/add-customer-bulk/add-customer-bulk.component.scss']
})
export class AddCustomerBulkComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}