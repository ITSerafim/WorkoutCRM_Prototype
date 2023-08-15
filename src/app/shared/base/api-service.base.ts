import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbstractApiService } from '../abstract/api-service.abstract';
import { ENDPOINT_TOKEN } from '../tokens/endpoint.token';
@Injectable()
export class BaseApiService<T, Y> extends AbstractApiService<T, Y> {
  constructor(
    protected override readonly http: HttpClient,
    @Inject(ENDPOINT_TOKEN)
    protected readonly apiEndpoint: BehaviorSubject<string>
  ) {
    super(apiEndpoint, http);
  }
}
