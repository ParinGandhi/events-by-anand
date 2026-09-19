import { Component, OnInit, signal, HostListener, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('events-by-anand');

  @ViewChild('vipPackageModal') vipPackageModal!: ElementRef<HTMLDialogElement>;
  @ViewChild('signatureModal') signatureModal!: ElementRef<HTMLDialogElement>;
  @ViewChild('essentialModal') essentialModal!: ElementRef<HTMLDialogElement>;
  @ViewChild('packageModal') packageModal!: ElementRef<HTMLDialogElement>;

  // Track scroll state
  isShrunk: boolean = false;

  // Track mobile menu state
  isMenuCollapsed: boolean = true;

  selectedPackage: string = '';

  packageDetails = [
    {
      package: ['vip'],
      item: 'Vendor Selection',
      description: 'Researching and recommending vendors that fit your event needs and budget',
    },
    {
      package: ['vip', 'signature', 'essential'],
      item: 'Vendor Coordination',
      description: 'Communicating with vendors and managing event-related details',
    },
    {
      package: ['vip'],
      item: 'Venue Selection',
      description: 'Finding and recommending venues that match your vision and requirements',
    },
    {
      package: ['vip', 'signature', 'essential'],
      item: 'Venue Coordination',
      description: 'Working directly with the venue to ensure all details are organized',
    },
    {
      package: ['vip', 'signature', 'essential'],
      item: 'Event Timeline',
      description: 'Creating a detailed timeline to keep your event running smoothly',
    },
    {
      package: ['vip'],
      item: 'Budget Management',
      description: 'Helping establish, organize, and manage your event budget',
    },
    {
      package: ['vip', 'signature'],
      item: 'Event Design',
      description: 'Developing the overall look, feel, and aesthetic of your event',
    },
    {
      package: ['vip', 'signature', 'essential'],
      item: 'Day-of Coordination',
      description: 'Managing the event on the day of so you can relax and enjoy the celebration',
    },
  ];

  packageDescription = [
    {
      package: 'vip',
      title: 'The VIP Experience',
      description:
        'The VIP Experience is our premium, full-service event coordination package, designed to provide a seamless and stress-free planning experience from start to finish. From vendor and venue selection to event design, budgeting, timeline creation, and day-of coordination, we handle the details so you can focus on enjoying your special event.',
    },
    {
      package: 'signature',
      title: 'The Signature Experience',
      description:
        'The Signature Experience is designed for clients who want professional guidance and coordination while maintaining control over the planning process. From vendor and venue communication to event design, timeline creation, and day-of coordination, we ensure every detail is organized and your event runs smoothly.',
    },
    {
      package: 'essential',
      title: 'The Essential Experience',
      description:
        'The essential experience is a streamlined coordination package designed for clients who have their event plans in place but need professional support to keep everything organized and running smoothly. This package provides essential coordination leading up to and on the day of your event, allowing you to enjoy your celebration with confidence and peace of mind.',
    },
  ];

  ngOnInit(): void {
    this.onWindowScroll();
  }

  // Angular listener for window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Shrink navbar when scrolled down more than 50px
    this.isShrunk = window.scrollY > 50;
  }

  // Toggle mobile navigation
  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  // Auto-close menu when a nav link is clicked (mobile)
  closeMenu(): void {
    this.isMenuCollapsed = true;
  }

  open(modalType: string) {
    this.selectedPackage = modalType;
    this.packageModal.nativeElement.showModal();
    // switch (modalType) {
    //   case 'vip':
    //     this.vipPackageModal.nativeElement.showModal();
    //     break;
    //   case 'signature':
    //     this.signatureModal.nativeElement.showModal();
    //     break;
    //   case 'essential':
    //     this.essentialModal.nativeElement.showModal();
    //     break;
    //   default:
    //     break;
    // }
  }

  close() {
    this.packageModal.nativeElement.close();
    // switch (modalType) {
    //   case 'vip':
    //     this.vipPackageModal.nativeElement.close();
    //     break;
    //   case 'signature':
    //     this.signatureModal.nativeElement.close();
    //     break;
    //   case 'essential':
    //     this.essentialModal.nativeElement.close();
    //     break;
    //   default:
    //     break;
    // }
  }
}
