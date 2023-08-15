import { InjectionToken } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export const ENDPOINT_TOKEN = new InjectionToken<BehaviorSubject<string>>('Api token');
